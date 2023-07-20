import { Button,Card } from 'react-bootstrap';

const CourseCard = (props) => {
    
    const data = {"name":props.name,
                "duration":props.duration,
                "timings":props.timings,
                "students":props.students,
                "description":props.description}

    const handleClick = () => {
        
        sessionStorage.setItem("selectedCourse",JSON.stringify(data));
        window.location.href = "/Details"; //Enrollment form page link path
    }

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
                    <Button className='m-2' variant="success" onClick={handleClick} >Enroll Now</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
    }
export default CourseCard;