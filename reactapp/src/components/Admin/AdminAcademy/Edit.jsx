import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {API_BASE_URL} from "../../../utils/APIUtils";

function Edit() {
  let navigate=useNavigate();

  const{instituteId}=useParams()


  const [user,setUser]=useState({

    instituteName:"",
    imageurl:"",
    instituteAddress:"",
    mobile:"",
    email:"",
    instituteDescription:""

  })

  const{instituteName,imageurl,instituteAddress,mobile,email,instituteDescription}=user;

  const onInputChange=(e)=>{

setUser({ ...user, [e.target.name]:e.target.value});
  };

useEffect(()=>{
  loadUser();
},[]);


const onSubmit =async (e) => {
  e.preventDefault();
  
  await axios.put(`${API_BASE_URL}/admin/editInstitute/${instituteId}`,user);
navigate("/AdminInstitute");
};
const loadUser=async () =>{
 
  const result=await axios.get(`${API_BASE_URL}/admin/editInstitute/${instituteId}`);
  setUser(result.data)
};

    return (
        <Container style={{marginTop:"40px",height:"500px",backgroundColor:"rgb(230, 248, 250)"}}>
          
         
        <Form onSubmit={(e)=> onSubmit(e)}>

        <Row className="mb-3" style={{height:"120px",paddingTop:"20px"}}>
            <Form.Group as={Col} md="6" id='editAcademyName' >
              <Form.Label  column="lg">Enter Academy Name</Form.Label>
              <Form.Control size="lg"
                required
                type="text"
                placeholder="Enter the Academy name"
                name="instituteName"
            value={instituteName}
            onChange={(e)=>onInputChange(e)}
                />
    
            </Form.Group>
            <Form.Group as={Col} md="6" id='editimageUrl'>
              <Form.Label  column="lg">Enter the Academy Image URL</Form.Label>
              <Form.Control size="lg"
                required
                type="text"
                placeholder="Enter the Academy Image URL"
                name="imageurl"
            value={imageurl}
            onChange={(e)=>onInputChange(e)}
                
              />
              </Form.Group>
              </Row>
              <Row className="mb-3" style={{height:"100px"}}>
            
            <Form.Group as={Col} md="6" id='editAcademyLocation'>
              <Form.Label column="lg">Enter the Academy Location</Form.Label>
              <InputGroup hasValidation>
               
              <Form.Control size="lg"
                  type="text"
                  placeholder="Enter the Academy Location"
                  name="instituteAddress"
              value={instituteAddress}
              onChange={(e)=>onInputChange(e)}
                  required
                />
              </InputGroup>
            </Form.Group>
            
    
            <Form.Group as={Col} md="6" id='editContactNumber'>
              <Form.Label column="lg">Enter the contact number</Form.Label>
              <Form.Control size="lg" type="number" placeholder="Enter the contact number" name="mobile" value={mobile} onChange={(e)=>onInputChange(e)} required />
            </Form.Group>
    
            </Row>
            <Row className="mb-3" style={{height:"100px"}}>
            
            <Form.Group as={Col} md="6" id='editEmailId'>
              <Form.Label column="lg">Enter the Academy email</Form.Label>
              <Form.Control size="lg" type="email" placeholder="Enter the academy email" name="email" value={email} onChange={(e)=>onInputChange(e)} required />
            </Form.Group>
    
    
            <Form.Group as={Col} md="6" id='editAcademyDescription' >
              <Form.Label column="lg">Enter the Academy Description</Form.Label>
              <Form.Control size="lg" type="text" placeholder="Enter the Academy Description" name="instituteDescription" value={instituteDescription} onChange={(e)=>onInputChange(e)} required /></Form.Group>
            
            </Row>
          
            <button type="submit" style={{marginTop:"20px",fontSize:"20px",backgroundColor:"rgb(0, 204, 0)",marginLeft:"900px",height:"60px",width:"220px",borderRadius:"25px",border:"1px solid green"}} >Edit Academy </button>
    </Form>
    </Container>
    
  );
}

export default Edit;