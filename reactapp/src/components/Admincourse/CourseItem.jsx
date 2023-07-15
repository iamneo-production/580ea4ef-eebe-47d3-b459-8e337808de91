import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const CourseItem = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/users');
    setUsers(result.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div>
      <h1 className="my-5 text-center">Manage Course</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-4"></div>
          {users.map((user) => (
            <Card
              key={user.id} 
              style={{ width: '600px', backgroundColor: 'grey', position: 'relative' }}
              className="mb-4"
            >
              <Card.Body>
                <Card.Text>
                  <strong>Course Name:</strong> {user.courseName}
                </Card.Text>
                <Card.Text>
                  <strong>Course Duration:</strong> {user.duration}
                </Card.Text>
                <Card.Text>
                  <strong>Course Timing:</strong> {user.courseTiming}
                </Card.Text>
                <Card.Text>
                  <strong>No of Students:</strong> {user.noStudents}
                </Card.Text>
                <Card.Text>
                  <strong>Course Description:</strong> {user.description}
                </Card.Text>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <Button
                    variant="success"
                    className="me-2"
                    id="editCourse"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    <Link
                      to={`/EditCourse/${user.id}`}
                      className="link-no-underline"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button variant="danger" id="deleteCourse" onClick={() => deleteUsers(user.id)}>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
