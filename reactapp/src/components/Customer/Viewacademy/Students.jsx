import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Students.css';
import StudentServices from './StudentServices';

const Students = () => {

  const [student,setStudent]=useState([])
  const {studentId}=useParams();
  useEffect(()=>{
  StudentServices.getStudent1().then((response)=>{
    setStudent(response.data)
    console.log(response.data);
  }).catch(error=>{
    console.log(error);
  })
},[])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
      };

    const history=useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();

    // history('/Academy')
    history('/user/Academy')
    
  }
  const handle1click=(e)=>{
    e.preventDefault();
    // history("/EnrolledCourse ")
    history("/user/EnrolledCourse ")
  }
  
  const handlingClick = (e) => {
    e.preventDefault();
 
    history("/")
    
  }
  const handledetails=(e)=>
{
  e.preventDefault();
  history("/user/Details")
}

  return (
    <>
      <div>
    <Navbar bg="primary" variant="dark" >
    <Container>
      
      <Nav className='mx-auto'>
        <Nav.Link href="#Academy" onClick={handleClick} >Academy</Nav.Link>
        <Nav.Link href="#EnrolledCourse " onClick={handle1click}  >Enrolled Course</Nav.Link>
        </Nav>
        <Nav className="ml-2">
        <Nav.Link href="Logout" className='mr-5'  onClick={handlingClick} ><span className="fa fa-sign-out me-2" ></span>Logout</Nav.Link>
        </Nav>
      
    </Container>
  </Navbar>
    </div>

    <div>
    <div className="container">
      <h2 className="text-center">Details </h2>
      <Button  className="btn btn-primary  details" onClick={handledetails}>Add Details</Button>
      <table className="table table-striped mt-0">
        <thead>
          
            <th> Student ID</th>
            <th> Student name</th>
            <th> StudentDOB</th>
            <th>Mobile number</th>
            <th>Alternate Number</th>
            <th>Email  </th>
            <th>Gender</th>
            <th>Address  </th>
            <th>Actions</th>
         
        </thead>
        <tbody>
          {
            student.map(
              student =>
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student. studentDOB}</td>
                <td>{student. mobile}</td>
                <td>{student.alternatenumber}</td>
                <td>{student. email}</td>
                <td>{student. malefemale}</td>
                <td>{student.completeaddress}</td>
                <td><Link className='btn-btn-info' to={`/user/UpdateStudent1/${student.studentId}`}>Update</Link></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
    </div>
    </>


    
  );
}

export default Students;

