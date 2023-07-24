import 'font-awesome/css/font-awesome.min.css';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useEffect} from 'react';
import { Button, Container, Form ,InputGroup} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,useParams } from 'react-router-dom';
import StudentServices from './StudentServices';
import './Details.css';

const Details = () => {
  
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [gender,setGender]=useState("");
  const [fatherName,setFatherName]=useState("");
  /*const [phonenumber,setPhonenumber]=useState("");*/
  const [alternatenumber,setAlternatenumber]=useState("");
  const [motherName,setMotherName]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState("");
  const [houseno,setHouseno]=useState("");
  const [streetname,setStreetname]=useState("");
  const [areaname,setAreaname]=useState("");
  const [pincode,setPincode]=useState("");
  const [state,setState]=useState("");
  const [nationality,setNationality]=useState("");
  const [studentName,setStudentName]=useState("")
  const [studentDOB,setStudentDOB]=useState("")
  const [completeaddress,setCompleteaddress]=useState("")
  const [mobile,setMobile]=useState("")
  const {studentId}=useParams();




  //this is details page
  //this helps to fill details of student

  

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

  const saveOrUpdateStudent=(e)=>{
    e.preventDefault();
      const address= `${houseno} ${streetname} ${areaname} ${pincode} ${state} ${nationality}`
      //const mobile = `${phonenumber} - ${alternatenumber}`
    const student={studentName,studentDOB,completeaddress,mobile,alternatenumber,email,gender,fatherName,motherName,address}
    if(studentId){
      StudentServices.updateStudent(studentId,student).then((response)=>{

        console.log(response.data)
          history("/user/Students ")
      }).catch(error =>{
        console.log(error)
      })
    }else{
    StudentServices.saveStudent(student).then((response)=>{
      console.log(response.data)
      history("/user/Students ")
    }).catch(error=>{
      console.log(error)
    })
  }
}
  useEffect(()=>{
    const id = parseInt(studentId);
    StudentServices.getStudents(id).then((response)=>{
      setStudentName(response.data.studentName);
          setStudentDOB(response.data.studentDOB);
          setGender(response.data.malefemale);
          setMobile(response.data.mobile);
          setAlternatenumber(response.data.alternatenumber);
          setCompleteaddress(response.data.completeaddress);
          setEmail(response.data.email);
    }).catch(error=>{
      console.log(error)
    })
  },[studentId])
  
    

  const form1=()=>{
    
    if(studentId){
      return (
      <Container className="mt-5">
      <Form  className="row g-4">
        <div className="col-sm-4">

    <Form.Group controlId="studentname">
            <Form.Control type="text" placeholder="enter Student Name" value={studentName} onChange={(e)=>setStudentName(e.target.value.trim())} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="studentDOB">
          <InputGroup>
          <InputGroup.Text>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </InputGroup.Text>
            <Form.Control type="date" placeholder="enter Student DOB" value={studentDOB ? new Date(studentDOB).toISOString().split('T')[0] : ''} onChange={(e)=>setStudentDOB(new Date(e.target.value))}/>
            </InputGroup>
         
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="MobileNumber">
            <Form.Control type="text" placeholder="enter Mobile Number " value={mobile} onChange={(e)=>setMobile(e.target.value.trim())} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="MobileNumber">
          
            <Form.Control type="text" placeholder="enter Alternate Number " value={alternatenumber} onChange={(e)=>setAlternatenumber(e.target.value.trim())} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="Email">
            <Form.Control type="email" placeholder="enter Email Id" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
        </div>
        <div className="col-sm-4">
          <Form.Group controlId="Gender">
            <Form.Control type="text" placeholder="enter Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
          </Form.Group>
        </div>
        <div className="col-sm-4 ">
          <Form.Group controlId="Address">
            <Form.Control type="text" placeholder="enter Address" value={completeaddress} onChange={(e)=>setCompleteaddress(e.target.value.trim())} />
          </Form.Group>
        </div>
          <br></br>
          <div className="text-left ">
          <Button variant="success" type="submit" onClick={saveOrUpdateStudent} >
            Enroll Now
          </Button>
        </div>
        
    </Form>
  </Container>)

    }else{
      return (
        <Container className="mt-5">
      <Form  className="row g-4">
        <div className="col-sm-4">
          

          <Form.Group controlId="firstname">
            <Form.Control type="text" placeholder="enter first Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="lastname">
            <Form.Control type="text" placeholder="enter last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
          </Form.Group>
        </div>

          <div className="col-sm-4" >
          <Form.Group controlId="studentname">
            <Form.Control type="text" placeholder="enter Full Name" value={studentName} onChange={(e)=>setStudentName(e.target.value.trim())} />
          </Form.Group>
        </div>


        <div className="col-sm-4">
          <Form.Group controlId="formmaleorfemale">
            <Form.Control type="email" placeholder="enter male or female " value={gender} onChange={(e)=>setGender(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="fathername">
            <Form.Control type="text" placeholder="enter father name" value={fatherName} onChange={(e)=>setFatherName(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="phonenumber">
            <Form.Control type="text" placeholder="enter phone number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />        
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="MobileNumber">
            <Form.Control type="text" placeholder="enter Alternate Number " value={alternatenumber} onChange={(e)=>setAlternatenumber(e.target.value.trim())} />
          </Form.Group>
        </div>


           
          <div className="col-sm-4 mb-2">
          <Form.Group controlId="mothername">
            <Form.Control type="textarea"  placeholder="enter mother name" value={motherName} onChange={(e)=>setMotherName(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4">
          <Form.Group controlId="Adress">
            <Form.Control type="text" placeholder="enter complete Address with state and pincode " value={completeaddress} onChange={(e)=>setCompleteaddress(e.target.value.trim())} />
          </Form.Group>
        </div>
        </Form>
      
        <div className='border-box mb-3'>
            <div className='col-md-6 mb-2'>
                <label>Address Information</label>
            <Form.Group controlId="houseno ">
            <label > House No:</label>
            <Form.Control type="textarea" value={houseno} onChange={(e)=>setHouseno(e.target.value)}  />
          </Form.Group> 
            </div>
            
            <div className='col-sm-5 mb-2'>
            <Form.Group controlId="streetname">
            <label > Street Name:</label>
            <Form.Control type="textarea" value={streetname} onChange={(e)=>setStreetname(e.target.value)}   />
          </Form.Group> 
            </div>


            <Form  className="row g-4">
            <div className='col-sm-5 mr-auto'>
            <Form.Group controlId="areaname">
            <label > Area Name:</label>
            <Form.Control type="textarea" value={areaname} onChange={(e)=>setAreaname(e.target.value)} />
          </Form.Group> 
            </div>
            <div className='col-sm-4 '>
            <Form.Group controlId="pincode">
            <label > Pincode:</label>
            <Form.Control type="textarea" value={pincode} onChange={(e)=>setPincode(e.target.value)} />
          </Form.Group> 
            </div>
            </Form>

            <Form  className="row g-4">
            <div className='col-sm-4 mr-auto'>
            <Form.Group controlId="state">
            <label > State:</label>
            <Form.Control type="textarea" value={state} onChange={(e)=>setState(e.target.value)} />
          </Form.Group> 
            </div>
            <div className='col-sm-4 mb-2'>
            <Form.Group controlId="nationality">
            <label > Nationality:</label>
            <Form.Control type="textarea" value={nationality} onChange={(e)=>setNationality(e.target.value)}  />
          </Form.Group> 
            </div>
            </Form>
        </div>
      
        <Form className="row g-4">
        <div className="col-sm-4 top">
          <Form.Group controlId="emailid">
            <Form.Control type="textarea"  placeholder="enter emailid"value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
        </div>
        <div className="col-sm-4 left">
          <Form.Group controlId="age">
            <Form.Control type="textarea"  placeholder="enter age" value={age} onChange={(e)=>setAge(e.target.value)} />
          </Form.Group>
        </div>

        <div className="col-sm-4 calendar">
          <Form.Group controlId="studentDOB">
          <InputGroup>
          <InputGroup.Text>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </InputGroup.Text>
            <Form.Control type="date" placeholder="enter Student DOB" value={studentDOB ? new Date(studentDOB).toISOString().split('T')[0] : ''} onChange={(e)=>setStudentDOB(new Date(e.target.value))}/>
            </InputGroup>
         
          </Form.Group>
        </div>

        <div className="text-left">
            <Button variant="success" type="submit" onClick={saveOrUpdateStudent}>
              Enroll Now
            </Button>
          </div>
          
      </Form>
    </Container>
      )
    }
   }
 

  return (
    <>
    <div className='background'>


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
    
<Container className="mt-5">
      {
        form1()
      }

  </Container>

  
    
    </>
  );
}

export default Details;
