import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, Outlet } from 'react-router-dom';

export default function Navbarcomp() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">IAS Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to={'/'}>
              COURSE
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id="searchCourse" />
            <Button variant="outline-success">Logout</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />

      <AddCourseButton />
    </div>
  );
}

function AddCourseButton() {
  const location = useLocation();
  const isNavbarcompPage = location.pathname === '/';

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
