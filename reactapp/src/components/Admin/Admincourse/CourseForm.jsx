import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {API_BASE_URL} from "../../../utils/APIUtils";

const AddCourseForm = () => {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    courseName: '',
    description: '',
    duration: '',
    courseTiming: '',
    noStudents: ''
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post(`${API_BASE_URL}/user`,course)
    navigate("/")
    
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="formContainer">
      <h2 className="text-center">Add Course</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="courseName" id="CourseName">
          <Form.Label>Course Name:</Form.Label>
          <Form.Control type="text" name="courseName" value={course.courseName} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="description" id="courseDescriptions">
          <Form.Label>Course Description:</Form.Label>
          <Form.Control as="textarea" name="description" value={course.courseDescription} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="duration" id="courseDurations">
          <Form.Label>Course Duration:</Form.Label>
          <Form.Control type="text" name="duration" value={course.courseDuration} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="courseTiming" id="coursetiming">
          <Form.Label>Course Timing:</Form.Label>
          <Form.Control type="text" name="courseTiming" value={course.courseTiming} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <Form.Group controlId="noStudents" id="enrolledCourses">
          <Form.Label>Number of Students Enrolled for Courses:</Form.Label>
          <Form.Control type="number" name="noStudents" value={course.numberOfEnrolledCourses} onChange={handleChange} required className="formInput" />
        </Form.Group>
        <div className="buttonContainer">
          <Button variant="primary" type="submit" onClick={handleSubmit} id="addCourses" style={{ marginRight: '10px', borderRadius: '5px' }}>
            Add Course
          </Button>
          <Button variant="primary" onClick={handleBack} style={{ borderRadius: '5px' }}>
            Back
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddCourseForm;
