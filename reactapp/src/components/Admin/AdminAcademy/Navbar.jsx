import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigbar() {
  return (
   
      <div>
        <Navbar expand="lg" style={{backgroundColor: "rgb(17, 178, 247)" }}>
          
            <Navbar.Brand>IAS Academy</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
                <Nav.Link id="adminAcademy" as={Link} to="/AdminInstitute" className="academy" style={{ color: "black" , paddingRight:"30px"}}>
                  Academy
                </Nav.Link>
                <Nav.Link id="adminCourse" as={Link} to="/Admincourse" className="courses" style={{ color: "black",paddingRight:"30px"}}>
                  Courses
                </Nav.Link>
                <Nav.Link id="adminStudents" as={Link} to="/Students" className="students" style={{ color: "black"}}>
                  Students
                </Nav.Link>
                <Nav.Link id="logout" as={Link} to="/Login" className="logout" style={{ fontWeight: "bold", color: "black"}}>
                  Logout
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
        </div>
  );
}

export default Navigbar;
