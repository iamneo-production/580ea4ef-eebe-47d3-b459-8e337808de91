import { Button,Card } from 'react-bootstrap';
import { API_BASE_URL } from "../../../utils/APIUtils";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseCard = (props) => {
    const navigate = useNavigate();

    
    const data = {"name":props.name,
                "duration":props.duration,
                "timings":props.timings,
                "students":props.students,
                "description":props.description,
                "courseId":props.courseId
            }

    const handleClick = (e, courseId) => {
        
        sessionStorage.setItem("selectedCourse",JSON.stringify(data));
        //window.location.href = "/Details"; //Enrollment form page link path
        e.preventDefault();
        console.log('The link was clicked.');

        
        const course = {
            courseId: courseId,
            courseName: props.name,
            courseDuration: props.duration,
            joinedDate: new Date(),
            endDate: new Date(new Date().getFullYear(), new Date().getMonth() + parseInt(props.duration), new Date().getDate()),
            
            

        };
        

        axios.post(`${API_BASE_URL}/user/addAdmissions`, course)
            .then(() => {
                console.log('New enrollment added');
                navigate(`/user/Students/${course.courseId}`);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    

    return (
        <div className="cards m-4">
            <div className="cardInside">
            <Card className="m-3" style={{backgroundColor:"#a8a8a8"}} >
                <Card.Body >
                    <Card.Title className='m-3'>{props.name}</Card.Title>
                    <Card.Subtitle className='m-3'>Course Duration :&nbsp;{props.duration} Months</Card.Subtitle>
                    <Card.Subtitle className='m-3'>Course Timings :&nbsp;{props.timings}</Card.Subtitle>
                    <Card.Subtitle className='m-3'>No. of Students :&nbsp;{props.students}</Card.Subtitle>
                    <Card.Subtitle className='m-3'>Course Description :&nbsp;{props.description}</Card.Subtitle>
                    <Button className='m-2' variant="success" onClick={(e) => handleClick(e, props.courseId)} >Enroll Now</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
    }
export default CourseCard;