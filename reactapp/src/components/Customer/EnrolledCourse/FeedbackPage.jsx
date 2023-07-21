

import React, { useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './EnrolledCourse.css';

const FeedbackPage = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [question1,setQuestion1]=useState("");
    const [question2,setQuestion2]=useState("");
    const [question3,setQuestion3]=useState("");
    const [question4,setQuestion4]=useState("");
    const [feedback,setFeedback]=useState("");
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
            history("/EnrolledCourse1")
        }
    
    return (
        <>
        <div id="Academy">
    <Navbar className='bd bg-primary'  variant="primary" >
      <Container>
        <Nav className='mx-auto'>
          <Nav.Link href="#AcademiesPage" onClick={handleClick} >Academy</Nav.Link>
          <Nav.Link href="#EnrolledCourse1 " onClick={handle1click}  >Enrolledcourse</Nav.Link>
          </Nav>
          <Nav className="ml-2">
          <Nav.Link href="Logout" className='mr-5' onClick={handlingClick} >
           Logout</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
    </div>
        <div>
            <h1><center>Feedback</center></h1>
            <Container className="mx-auto">
            <Form>
                <div className="col-lg-6 mb-4  ">
                    <Form.Group controlId="name">
                        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                </div>

                <div className="col-lg-6 mb-4 text">
                    <Form.Group controlId="Email">
                        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </div>

                <Form.Group className='col-lg-6 mb-4 ' controlId="question1">
                    <Form.Label>1.How satisfied are you with the overall quality of the online courses?</Form.Label>
                    <Form.Control as='select' value={question1} onChange={(e) => setQuestion1(e.target.value)}>
                    <option value="" disabled>Select</option>
                        <option value="satisfied">Satisfied</option>
                        <option value="neutral">Neutral</option>
                        <option value="dissatisfied">Dissatisfied</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='col-lg-6 mb-4  ' controlId="question2">
                    <Form.Label>2.Did you find the course materials and resources helpful?</Form.Label>
                    <Form.Control as='select' value={question2} onChange={(e) => setQuestion2(e.target.value)}>
                    <option value="" disabled>Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='col-lg-6 mb-4 ' controlId="question3">
                    <Form.Label>3.How easy was it to navigate and use the learning platform?</Form.Label>
                    <Form.Control as='select' value={question3} onChange={(e) => setQuestion3(e.target.value)}>
                    <option value="" disabled>Select</option>
                        <option value="easy">Easy</option>
                        <option value="moderate">Moderate</option>
                        <option value="difficult">Difficult</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='col-lg-6 mb-4 ' controlId="question4">
                    <Form.Label>4.Did the online courses provide you with valuable knowledge and skills?</Form.Label>
                    <Form.Control as='select' value={question4} onChange={(e) => setQuestion4(e.target.value)}>
                    <option value="" disabled>Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Form.Control>
                </Form.Group>

                <div className="col-sm-6   ">
                    <Form.Group controlId="feedback">
                        <Form.Label>5.How would you rate the overall learning experience on this website and did you face any challenges or difficulties while taking the courses? If yes, please elaborate.</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Enter your feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    </Form.Group>
                </div>
                <div className="col-lg-6 mb-2">
              <Button type="submit">Submit Feedback</Button>
            </div>
            </Form>
            </Container>
        </div>
        </>
    );
};

export default FeedbackPage;

