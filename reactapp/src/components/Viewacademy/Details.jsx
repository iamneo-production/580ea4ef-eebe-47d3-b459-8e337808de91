import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './Details.css';

const Details = () => {
  
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [malefemale,setMalefemale]=useState("");
  const [fathername,setFathername]=useState("");
  const [phonenumber,setPhonenumber]=useState("");
  const [alternatenumber,setAlternatenumber]=useState("");
  const [mothername,setMothername]=useState("");
  const [emailid,setEmailid]=useState("");
  const [age,setAge]=useState("");
  const [houseno,setHouseno]=useState("");
  const [streetname,setStreetname]=useState("");
  const [areaname,setAreaname]=useState("");
  const [pincode,setPincode]=useState("");
  const [state,setState]=useState("");
  const [nationality,setNationality]=useState("");




  //this is detaild page

  

  const history=useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    history("/Academy")
  }
  const handlingClick = (e) => {
    e.preventDefault();
 
    history("/")
  }
  const handle1click=(e)=>{
    e.preventDefault();
    history("/EnrolledCourse")
  }
  
  const adddata=(e)=>{
    e.preventDefault();
    console.log("clicked")
      history("/EnrolledCourse")

  }
 

  return (
    <div className='background'>

<Navbar className='custom-navbar' variant="dark" >
      <Container>
        
        <Nav className='mx-auto'>
          <Nav.Link id="userAcademy" href="#Academy" onClick={handleClick} >Academy</Nav.Link>
          <Nav.Link id="userEnrolledCourse" href="#EnrolledCourse " onClick={handle1click}  >Enrolledcourse</Nav.Link>
          </Nav>
          <Nav className="ml-2">
          <Nav.Link id="logout" href="Logout" className='mr-5' onClick={handlingClick} > <span className="fa fa-sign-out me-2" ></span>Logout</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>

    

<Container className="mt-5">
      <Form  className="row g-4">
        <div className="col-sm-4">
          <Form.Group controlId="firstname">
            <Form.Control id="firstName" type="text" placeholder="enter your first Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="lastname">
            <Form.Control id="lastName" type="text" placeholder="enter your last name" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="formmaleorfemale">
            <Form.Control id="malefemale" type="email" placeholder="enter male or female "  value={malefemale} onChange={(e)=>setMalefemale(e.target.value)} />
            <span className="fa-sharp fa-solid fa-location-dot"></span> 
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="fathername">
            <Form.Control id="fatherName" type="text" placeholder="enter your father name" value={fathername} onChange={(e)=>setFathername(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="phonenumber">
            <Form.Control id="phoneNumber1" type="text" placeholder="enter phone number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} />        
          </Form.Group>
        </div>

        <div className="col-sm-4 margin">
          <Form.Group controlId="alternatenumber">
            <Form.Control id="phoneNumber2" type="textarea"  placeholder="enter alternate number" value={alternatenumber} onChange={(e)=>setAlternatenumber(e.target.value)} />
          </Form.Group>
          </div>

          
          <div className="col-sm-4 mb-2">
          <Form.Group controlId="mothername">
            <Form.Control id="motherName" type="textarea"  placeholder="enter your mother name" value={mothername} onChange={(e)=>setMothername(e.target.value)} />
          </Form.Group>
        </div>
        </Form>
      
        <div className='border-box mb-3'>
            <div className='col-md-6 mb-2'>
                <label>Address Information</label>
            <Form.Group controlId="houseno ">
            <label > House No:</label>
            <Form.Control  id="houseNo "type="textarea"  value={houseno} onChange={(e)=>setHouseno(e.target.value)}  />
          </Form.Group> 
            </div>
            
            <div className='col-sm-5 mb-2'>
            <Form.Group controlId="streetname">
            <label > Street Name:</label>
            <Form.Control id="streetName"type="textarea"  value={streetname} onChange={(e)=>setStreetname(e.target.value)} />
          </Form.Group> 
            </div>


            <Form  className="row g-4">
            <div className='col-sm-5 mr-auto'>
            <Form.Group controlId="areaname">
            <label > Area Name:</label>
            <Form.Control id="areaName" type="textarea" value={areaname} onChange={(e)=>setAreaname(e.target.value)}  />
          </Form.Group> 
            </div>
            <div className='col-sm-4 '>
            <Form.Group controlId="pincode">
            <label > Pincode:</label>
            <Form.Control id="pincode" type="textarea" value={pincode} onChange={(e)=>setPincode(e.target.value)}  />
          </Form.Group> 
            </div>
            </Form>

            <Form  className="row g-4">
            <div className='col-sm-4 mr-auto'>
            <Form.Group controlId="state">
            <label > State:</label>
            <Form.Control id="state" type="textarea"  value={state} onChange={(e)=>setState(e.target.value)} />
          </Form.Group> 
            </div>
            <div className='col-sm-4 mb-2'>
            <Form.Group controlId="nationality">
            <label > Nationality:</label>
            <Form.Control id="nationality" type="textarea" value={nationality} onChange={(e)=>setNationality(e.target.value)}  />
          </Form.Group> 
            </div>
            </Form>
        </div>
      
        <Form className="row g-4">
        <div className="col-sm-4 top">
          <Form.Group controlId="emailid">
            <Form.Control id="emailid" type="textarea"  placeholder="enter email Id" value={emailid} onChange={(e)=>setEmailid(e.target.value)} />
          </Form.Group>
        </div>

      
        <div className="col-sm-4 left">
          <Form.Group controlId="age">
            <Form.Control  id="age" type="textarea"  placeholder="enter you age" value={age} onChange={(e)=>setAge(e.target.value)} />
          </Form.Group>
        </div>
    
        <div className="col-12 text-left">
          <Button variant="success" type="submit" onClick={adddata}>
          Enroll Now
          </Button>
        </div>
      </Form>
    </Container>

    

    
     
        
  
    
    </div>
  );
}

export default Details;
