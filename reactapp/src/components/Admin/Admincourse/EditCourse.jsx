import React, { useState, useEffect } from 'react';

import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';

import {API_BASE_URL} from "../../../utils/APIUtils";

const EditCourse = () => {
  const [course, setCourse] = useState({
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    courseTiming: '',
    courseEnrolled: ''
  });

  const navigate = useNavigate();
  const { courseId } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await axios.get(`${API_BASE_URL}/user/${courseId}`);
        setCourse(result.data);
        console.log (result.data);
      } catch (error) {
        console.log('Error retrieving user:', error);
      }
    };

    loadUser();
  }, [courseId]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API_BASE_URL}/user/${courseId}`, course);
    navigate('/Admincourse');
  };

  const handleGoBack = () => {
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
                <Nav.Link id="adminStudents" as={Link} to="/admin/viewStudent" className="students" style={{ color: "black" }}>
                  Students
                </Nav.Link>
                <Nav.Link id="logout" as={Link} to="/login" className="logout" style={{ fontWeight: "bold", color: "black"}}>
                  Logout
                </Nav.Link>
        </Navbar.Collapse>
      </Navbar>

    </div>
    <div className="formContainer">
      <h2 className="text-center">Edit Course</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="courseNames" id="editCourseName">
          <Form.Label>Course Name:</Form.Label>
          <Form.Control
            type="text"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
            required
            className="formInput"
          />
        </Form.Group>
        <Form.Group controlId="courseDescriptions" id="editCourseDescriptions">
          <Form.Label>Course Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="courseDescription"
            value={course.courseDescription}
            onChange={handleChange}
            required
            className="formInput"
          />
        </Form.Group>
        <Form.Group controlId="courseDurations" id="editCourseDurations">
          <Form.Label>Course Duration:</Form.Label>
          <Form.Control
            type="text"
            name="courseDuration"
            value={course.courseDuration}
            onChange={handleChange}
            required
            className="formInput"
          />
        </Form.Group>
        <Form.Group controlId="courseTimings" id="editCourseTiming">
          <Form.Label>Course Timing:</Form.Label>
          <Form.Control
            type="text"
            name="courseTiming"
            value={course.courseTiming}
            onChange={handleChange}
            required
            className="formInput"
          />
        </Form.Group>
        <Form.Group controlId="courseEnrolleds" id="editEnrolledCourses">
          <Form.Label>Number of Students Enrolled for Courses:</Form.Label>
          <Form.Control
            type="number"
            name="courseEnrolled"
            value={course.courseEnrolled}
            onChange={handleChange}
            required
            className="formInput"
          />
        </Form.Group>
        <div className="buttonContainer">
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            id="addCourses"
            style={{ marginRight: '10px', borderRadius: '5px' }}
          >
            Update Course
          </Button>
          <Button variant="primary" onClick={handleGoBack} style={{ borderRadius: '5px' }}>
            Back
          </Button>
        </div>
      </Form>
    </div>
    </div>

  );
};

export default EditCourse;

