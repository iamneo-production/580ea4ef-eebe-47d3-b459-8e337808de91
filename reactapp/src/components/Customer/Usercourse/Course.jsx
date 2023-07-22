import { Container, Row, Col, Navbar, FormControl, Button, Form } from "react-bootstrap";
import { useState,useEffect } from "react";
import CourseCard from "./CourseCard";
import {API_BASE_URL} from "../../../utils/APIUtils";
import axios from 'axios';

const Course = () => {

    document.body.style.backgroundColor = "#f5f5f5";

    const [searchTerm, setSearchTerm] = useState("");

    //handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    //connet to the backend and return all the course list to this variable
    const [courseList, setcourseList] = useState([]);

    useEffect(() => {
        async function getCoursesFromDb() {
          try {
            const res = await axios.get(`${API_BASE_URL}/admin/viewCourses`);
            setcourseList(res.data);
        
          } catch (e) {
            alert(e);
          }
        }
        getCoursesFromDb();
      }, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg" className="p-3">
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Form inline className="d-flex m-2 w-100" >
                            {/* <FormControl type="text" placeholder="Search Academy" className=" mr-sm-2 m-1" onChange={handleSearch} /> */}
                            <FormControl type="text" placeholder="Search Courses" className=" mr-sm-2 m-1" onChange={handleSearch} />
                            <Button variant="success" className="m-1">Search</Button>
                        </Form>
                        {/* </Navbar.Collapse> */}
                    </Navbar>

                </Col>
            </Row>
            <Row xl={1} lg={1} md={1} xs={1} className="h-100 d-flex flex-column align-items-center justify-content-center">
                {
                    courseList.filter((item) => {
                        if (searchTerm === "") {
                            return item;
                        } else if (item.courseName && item.courseName.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item;
                        }
                        return null;
                    }).map((item, index) => {
                        return (
                            <Col>
                                <CourseCard name={item.courseName} description={item.courseDescription} duration={item.courseDuration} students={item.courseEnrolled} timings={item.courseTiming} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}
export default Course;


// Incase the page dosen't wrk install react-bootstrap using this command "npm install react-bootstrap bootstrap"