import React, {  useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './EnrolledCourse.css';
import {API_BASE_URL} from "../../../utils/APIUtils";


const Enrolledcourse = () => {
const[data,setData]=useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/viewAdmission`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchData();
}, []);
 

const history=useNavigate();
  

  const handleClick = (e) => {
    e.preventDefault();

    // history("/Academy")
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
 const clickChange = () => {
  history("/user/Mylearning")
  
  console.log('The link was clicked.');
};


/*const handleEdit = (enrolled) => {
  
  console.log('Edit clicked for image with ID:', enrolled);
 
  
  history(`/Details`);
  
};*/


const fetchDelete = async (enrolled) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/deleteAdmission/${enrolled}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      window.location.reload();
    } else {
      console.log('Delete request failed');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};


const handleDelete = (admissionid) => {
 
  console.log('Delete clicked for image with ID:', admissionid);
  fetchDelete(admissionid);
  //setData(prevData => prevData.filter(item => item.admissionid !== admissionid));
};

return (
   <>
    <div>
      
      <Navbar bg="primary" variant="primary" >
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
                <h3>No Enrolled Courses</h3>
              </div>
            ) : (data 
         .map((values,index)=>{
            const{admissionid,courseName,joinedDate,endDate}=(values)
            return(
               <>
               <React.Fragment key={admissionid} >
            <div className='card mb-4'>
               
               <div className='card-body'>
               
                  <h5 className='card-title'>Course:{courseName}</h5>
                  <h6 className='card-text'> JoinedDate:{joinedDate}</h6>
                  <h6 className='card-text'> EndDate:{endDate}</h6>
                  <Button className='btn btn-danger' onClick={clickChange}>My Learning
                        </Button>
                        <div className=' icons-container '>
                {/*<FaEdit className='edit-icon' onClick={() => handleEdit(admissionid)} />*/}
                <FaTrash className='delete-icon' onClick={() => handleDelete(admissionid)} />
            </div>
                        

               </div>
            </div>
         </React.Fragment>
               </>
            );
         }))}
      </div>
        </div>


 
  </>


  );
}

export default Enrolledcourse;


 

