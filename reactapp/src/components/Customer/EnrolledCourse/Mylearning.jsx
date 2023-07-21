import React, {  useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Mylearning = () => {
    const history=useNavigate();
    const[data,setData]=useState([]);

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


return (
    <>
    <div>
      <Navbar bg="primary" variant="dark" >
      <Container>
        
        <Nav className='mx-auto'>
          <Nav.Link href="#AcademiesPage" onClick={handleClick} >Academy</Nav.Link>
          <Nav.Link href="#EnrolledCourse " onClick={handle1click}  >Enrolledcourse</Nav.Link>
          </Nav>
          <Nav className="ml-2">
          <Nav.Link href="Logout"  onClick={handlingClick} >Logout</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
    </div>

<div className='container-fluid'>
      <div className='row'>
         {data.length === 0 ? (
              <div className='col-md-12 text-center'>
                <h3>There is no status of learning</h3>
              </div>
            ) : (data 
         .map((values,index)=>{
            const{courseName,endDate,admissionid}=(values);
            //const remainingDays = calculateRemainingDays(endDate);
            return(
               <>
               <div className='col-md-3' key={admissionid} >
            <div className='card mb-4'>
               
               <div className='card-body'>
               
                  <h5 className='card-title'>Course:{courseName}</h5>
                  {/*<h6 className='card-text'> RemainingDays:{remainingDays}</h6>*/}

               </div>
            </div>
         </div>
               </>
            );
         }))}
      </div>
   </div>


    </>
  );
}

export default Mylearning;
