import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigbar() {
  return (
    <header>
 
    <>
      <Navbar collapseOnSelect expand="lg" style={{height:"110px",backgroundColor:"rgb(0, 204, 0)"}} >
      <Container fluid>
          <Navbar.Brand style={{fontSize:"25px"}}>IAS Academy</Navbar.Brand>
          <Nav style={{fontSize:"25px"}}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link id='adminAcademy' as={Link} to ='/AdminInstitute' className='academy' style={{paddingLeft:"30px"}}>Academy</Nav.Link>
            <Nav.Link id='adminCourse' as={Link} to ='/Courses' className='courses' style={{paddingLeft:"30px"}}>Courses</Nav.Link>
            <Nav.Link id='adminStudents' as={Link} to ='/Students' className='students' style={{paddingLeft:"30px"}} >Students</Nav.Link>
            <Nav.Link id='logout' as={Link} to ='/logout' className='logout' style={{paddingLeft:"240px"}}>Logout</Nav.Link>
            </Navbar.Collapse>


          </Nav>
          
        </Container>
      </Navbar>
    
</>
   </header>
  );
}

export default Navigbar;