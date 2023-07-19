import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
//import { API_BASE_URL } from '../../utils/APIUtils';



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
  await axios.post("https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io/admininstitute",user)
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
  <Container style={{ marginTop: '20px', minHeight: '500px', backgroundColor: 'rgb(250, 213, 170)' }}>
    <Form onSubmit={(e) => onSubmit(e)}>
      <Row className="mb-3" style={{ paddingTop: '20px' }}>
        <Form.Group as={Col} md="6">
          <Form.Label column="lg">Enter Academy Name</Form.Label>
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="Enter the Academy name"
            name="instituteName"
            value={instituteName}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label column="lg">Enter the Academy Image URL</Form.Label>
          <Form.Control
            size="lg"
            required
            type="text"
            placeholder="Enter the Academy Image URL"
            name="imageurl"
            value={imageurl}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label column="lg">Enter the Academy Location</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter the Academy Location"
              name="instituteAddress"
              value={instituteAddress}
              onChange={(e) => onInputChange(e)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label column="lg">Enter the contact number</Form.Label>
          <Form.Control
            size="lg"
            type="number"
            placeholder="Enter the contact number"
            name="mobile"
            value={mobile}
            onChange={(e) => onInputChange(e)}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label column="lg">Enter the Academy email</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="Enter the academy email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label column="lg">Enter the Academy Description</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter the Academy Description"
            name="instituteDescription"
            value={instituteDescription}
            onChange={(e) => onInputChange(e)}
            required
          />
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-center">
        <button
          style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            backgroundColor: 'rgb(0, 204, 0)',
            width: '180px',
            borderRadius: '10px',
            border: '1px solid green',
          }}
        >
          Add Academy
        </button>
        <button
          style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            backgroundColor: 'rgb(240, 40, 24)',
            marginLeft: '1rem',
            height: '50px',
            width: '140px',
            borderRadius: '10px',
            border: '1px solid red',
            color: 'white',
          }}
          onClick={goToHome}
        >
          Cancel
        </button>
      </div>
    </Form>
  </Container>
);
}

export default Add;