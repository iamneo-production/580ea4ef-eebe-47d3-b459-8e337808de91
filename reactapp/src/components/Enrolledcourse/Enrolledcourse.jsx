import "./Enrolledcourse.css";
function Enrolledcourse(props){
    return (
        <div className="enrolledCourse" id="enrolledCourse">
            <table>
                <tr>
                    <td>Course name </td>
                    <td>:</td>
                    <td>{props.course}</td>
                </tr>
                <tr>
                    <td>Joined Date</td>
                    <td>:</td>
                    <td>{props.j_date}</td>
                </tr>
                <tr>
                    <td>Course end date</td>
                    <td>:</td>
                    <td>{props.e_date}</td>
                </tr>
            </table>
            <button id="btn">My Learning</button>
        </div>
    );
}
Enrolledcourse.defaultProps={
    course:"CSAT",
    j_date:"dd/mm/yyyy",
    e_date:"dd/mm/yyyy"
}

export default Enrolledcourse;