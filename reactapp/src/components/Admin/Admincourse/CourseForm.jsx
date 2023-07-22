import React, { useState } from 'react';
import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import { useNavigate ,Link, Outlet} from 'react-router-dom';
import axios from "axios";
import {API_BASE_URL} from "../../../utils/APIUtils";

const AddCourseForm = () => {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    courseTiming: '',
    courseEnrolled: ''
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
    console.log({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`${API_BASE_URL}/user`,course)
    navigate("/Admincourse")
    
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
       <div>
      <Navbar expand="lg" style={{backgroundColor: "rgb(17, 178, 247)" }}>
        <Navbar.Brand>IAS Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link id="adminAcademy" as={Link} to="/AdminInstitute" className="academy" style={{ color: "black", paddingRight: "30px" }}>
                  Academy
                </Nav.Link>
                <Nav.Link id="adminCourse" as={Link} to="/Courses" className="courses" style={{ color: "black", paddingRight: "30px" }}>
                  Courses
                </Nav.Link>
                <Nav.Link id="adminStudents" as={Link} to="/Students" className="students" style={{ color: "black" }}>
                  Students
                </Nav.Link>
                <Nav.Link id="logout" as={Link} to="/login" className="logout" style={{ fontWeight: "bold", color: "black"}}>
                  Logout
                </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

    </div>
    <div className="formContainer">
      <h2 className="text-center">Add Course</h2>
      <Form  onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="courseName" id="CourseName">
          <Form.Label>Course Name:</Form.Label>
          <Form.Control type="text" name="courseName" value={course.courseName} onChange={(e) => handleChange(e)} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="description" id="courseDescriptions">
          <Form.Label>Course Description:</Form.Label>
          <Form.Control as="textarea" name="courseDescription" value={course.courseDescription} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="duration" id="courseDurations">
          <Form.Label>Course Duration:</Form.Label>
          <Form.Control type="text" name="courseDuration" value={course.courseDuration} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="courseTiming" id="coursetiming">
          <Form.Label>Course Timing:</Form.Label>
          <Form.Control type="text" name="courseTiming" value={course.courseTiming} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="noStudents" id="enrolledCourses">
          <Form.Label>Number of Students Enrolled for Courses:</Form.Label>
          <Form.Control type="number" name="courseEnrolled" value={course.courseEnrolled} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <div className="buttonContainer">
          <Button variant="primary" type="submit" id="addCourses" style={{ marginRight: '10px', borderRadius: '5px' }}>
            Add Course
          </Button>
          <Button variant="primary" onClick={handleBack} style={{ borderRadius: '5px' }}>
            Back
          </Button>
        </div>
      </Form>
    </div>
    </div>
  );
};

export default AddCourseForm;
