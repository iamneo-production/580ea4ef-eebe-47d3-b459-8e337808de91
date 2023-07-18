import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { API_BASE_URL } from '../../utils/APIUtils';



import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Add() {
let navigate=useNavigate();

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

const onSubmit =async (e) => {
  e.preventDefault();
  await axios.post("https://8080-aabbcbadccfbfcadcdaadecbbaeeaadadfcaea.project.examly.io/admininstitute",user)
navigate("/AdminInstitute");
};
// const onSubmit = async (e) => {
//   e.preventDefault();
//   // const baseUrl = "https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io";
  
//   const apiUrl = API_BASE_URL + "/admininstitute";
//   await axios.post(apiUrl, user);
//   navigate("/AdminInstitute");
// };

function goToHome(){
  navigate("/AdminInstitute")
}


  
  return (
    <Container style={{marginTop:"20px",height:"500px",backgroundColor:"gray"}}>
      
    <Form onSubmit={(e)=> onSubmit(e)}>
    <Row className="mb-3" style={{height:"120px",paddingTop:"20px"}}>

        <Form.Group as={Col} md="6" id='academyName'>
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


        <Form.Group as={Col} md="6" id='imageUrl'>
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
        
        <Form.Group as={Col} md="6" id='academyLocation'>
          <Form.Label  column="lg">Enter the Academy Location</Form.Label>
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
        

        <Form.Group as={Col} md="6" id='contactNumber'>
          <Form.Label  column="lg">Enter the contact number</Form.Label>
          <Form.Control size="lg" type="number" placeholder="Enter the contact number" name="mobile" value={mobile} onChange={(e)=>onInputChange(e)} required />
        </Form.Group>

        </Row>
        <Row className="mb-3" style={{height:"100px"}}>
        
        <Form.Group as={Col} md="6" id='emailid'>
          <Form.Label  column="lg">Enter the Academy email</Form.Label>
          <Form.Control size="lg" type="email" placeholder="Enter the academy email" name="email" value={email} onChange={(e)=>onInputChange(e)} required />
        </Form.Group>


        <Form.Group as={Col} md="6" id='academyDescription'>
          <Form.Label  column="lg">Enter the Academy Description</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Enter the Academy Description" name="instituteDescription" value={instituteDescription} onChange={(e)=>onInputChange(e)} required /></Form.Group>
        
        </Row>
      
        <button style={{marginTop:"20px",fontSize:"1.2rem",backgroundColor:"rgb(0, 204, 0)",marginLeft:"48.37rem",height:"50px",width:"180px",borderRadius:"10px",border:"1px solid green"}}>Add Academy</button>
        <button style={{marginTop:"20px",fontSize:"1.2rem",backgroundColor:"rgb(240, 40, 24)",marginLeft:"1rem",marginRight:"0px",height:"50px",width:"140px",borderRadius:"10px",border:"1px solid red",color:"white"}} onClick={goToHome}>Cancel</button>  
   
    </Form>
    </Container>
  );
}

export default Add;