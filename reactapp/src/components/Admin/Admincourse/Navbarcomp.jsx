import React from 'react';
import { Button,  Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, Outlet } from 'react-router-dom';

export default function Navbarcomp() {
  return (
    <div>
    <Navbar expand="lg" style={{backgroundColor: "rgb(17, 178, 247)" }}>
      <Navbar.Brand>IAS Academy</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav.Link id="adminAcademy" as={Link} to="/" className="academy" style={{ color: "black"}}>
                Academy
              </Nav.Link>
              <Nav.Link id="adminCourse" as={Link} to="/Courses" className="courses" style={{ color: "black"}}>
                Courses
              </Nav.Link>
              <Nav.Link id="adminStudents" as={Link} to="/Students" className="students" style={{ color: "black" }}>
                Students
              </Nav.Link>
              <Nav.Link id="logout" as={Link} to="/logout" className="logout" style={{ fontWeight: "bold", color: "black"}}>
                Logout
              </Nav.Link>
      </Navbar.Collapse>
    </Navbar>

  

      <AddCourseButton />
    </div>
  );
}

function AddCourseButton() {
  const location = useLocation();
  const isNavbarcompPage = location.pathname === '/Admincourse';

  if (!isNavbarcompPage) {
    return null;
  }

  return (
    <div id="addCourse">
      <Button type="button" className="btn btn-success" id="addCourse" as={Link} to={'/courseform'}>
        Add Course
      </Button>
    </div>
  );
}

