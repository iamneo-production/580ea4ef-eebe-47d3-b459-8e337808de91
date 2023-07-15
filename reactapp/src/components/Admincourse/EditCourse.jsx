import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditCourse = () => {
  const [course, setCourse] = useState({
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    courseTiming: '',
    numberOfEnrolledCourses: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setCourse(result.data);
      } catch (error) {
        console.log('Error retrieving user:', error);
      }
    };

    loadUser();
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, course);
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="formContainer">
      <h2 className="text-center">Edit Course</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="courseName" id="editCourseName">
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
        <Form.Group controlId="description" id="editCourseDescriptions">
          <Form.Label>Course Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={course.description}
            onChange={handleChange}
            required
            className="formInput"
          />
        </Form.Group>
        <Form.Group controlId="courseDuration" id="editCourseDurations">
          <Form.Label>Course Duration:</Form.Label>
          <Form.Control
            type="text"
            name="duration"
            value={course.duration}
            onChange={handleChange}
            required
            className="formInput"
          />
        </Form.Group>
        <Form.Group controlId="courseTiming" id="editCourseTiming">
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
        <Form.Group controlId="noStudents" id="editEnrolledCourses">
          <Form.Label>Number of Students Enrolled for Courses:</Form.Label>
          <Form.Control
            type="number"
            name="noStudents"
            value={course.noStudents}
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
  );
};

export default EditCourse;
