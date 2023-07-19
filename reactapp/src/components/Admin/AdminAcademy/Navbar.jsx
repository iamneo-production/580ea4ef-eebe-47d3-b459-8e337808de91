import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigbar() {
  return (
    <header>
      <>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "rgb(17, 178, 247)" }}>
          <Container fluid>
            <Navbar.Brand style={{ fontSize: "35px", paddingRight: "280px" }}>
              IAS Academy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" style={{ fontSize: "28px" }}>
                <Nav.Link id="adminAcademy" as={Link} to="/AdminInstitute" className="academy" style={{ color: "black", paddingRight: "30px" }}>
                  Academy
                </Nav.Link>
                <Nav.Link id="adminCourse" as={Link} to="/Admincourse" className="courses" style={{ color: "black", paddingRight: "30px" }}>
                  Courses
                </Nav.Link>
                <Nav.Link id="adminStudents" as={Link} to="/Students" className="students" style={{ color: "black" }}>
                  Students
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link id="logout" as={Link} to="/logout" className="logout" style={{ fontWeight: "bold", color: "white"}}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  );
}

export default Navigbar;
