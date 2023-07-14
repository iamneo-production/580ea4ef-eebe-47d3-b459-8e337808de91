import { Container, Row, Col, Navbar, FormControl, Button, Form } from "react-bootstrap";
import { useState,useEffect } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {

    document.body.style.backgroundColor = "#f5f5f5";

    const [searchTerm, setSearchTerm] = useState("");

    //handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    //connet to the backend and return all the course list to this variable
    const [courseList, setcourseList] = useState([]);

    useEffect(()=>{

        //connect your backend here using fetch or axios and return course list stored in the database

        //temp variable
        const examplelist = [
            {
                "id": 1,
                "name": "Current Affairs",
                "duration": "3 months",
                "timings": "9 AM - 12 PM",
                "students": 50,
                "description": "Current Affairs description"
            },
            {
                "id": 2,
                "name": "History",
                "duration": "2 months",
                "timings": "2 PM - 4 PM",
                "students": 30,
                "description": "History description"
            },
            {
                "id": 2,
                "name": "History",
                "duration": "2 months",
                "timings": "2 PM - 4 PM",
                "students": 30,
                "description": "History description"
            }
        ];
    
        setcourseList(examplelist);
    },[searchTerm]
    )

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navbar bg="light" expand="lg" className="p-3">
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Form inline className="d-flex m-2 w-100" >
                            <FormControl type="text" placeholder="Search Academy" className=" mr-sm-2 m-1" onChange={handleSearch} />
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
                        } else if (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item;
                        }
                        return null;
                    }).map((item, index) => {
                        return (
                            <Col>
                                <CourseCard name={item.name} description={item.description} duration={item.duration} students={item.students} timings={item.timings} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}
export default Courses;


// Incase the page dosen't wrk install react-bootstrap using this command "npm install react-bootstrap bootstrap"