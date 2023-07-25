import React, {  useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { API_BASE_URL } from "../../../utils/APIUtils";
import { useNavigate } from 'react-router-dom';

const Mylearning = () => {
    const history=useNavigate();
    const[data,setData]=useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/user/viewStatus`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);

    const calculateRemainingDays = (endDate) => {
      const currentDate = new Date();
      const endDateTime = new Date(endDate);
      const remainingTime = endDateTime.getTime() - currentDate.getTime();
      const remainingDays = Math.ceil(remainingTime / (1000 * 3600 * 24));
      return remainingDays;
    };
    const clickChange=()=>{
      history("/user/FeedbackPage")
     }


const handleClick = (e) => {
        e.preventDefault();
    
      //   history("/Academy")
         history("/user/Academy")
        
      }
      const handlingClick = (e) => {
       e.preventDefault();
    
       history("/")
       
     }
     const handle1click=(e)=>{
       e.preventDefault();
      //  history("/EnrolledCourse")
       history("/user/Enrolledcourse")
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
            const remainingDays = calculateRemainingDays(endDate);
            return(
               <>
               <div className='col-md-3' key={admissionid} >
            <div className='card mb-4'>
               
               <div className='card-body'>
               
                  <h5 className='card-title'>Course:{courseName}</h5>
                  <h6 className='card-text'> RemainingDays:{remainingDays}</h6>
                  <Button variant="primary" type="submit" onClick={clickChange}>Feedback</Button>

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
