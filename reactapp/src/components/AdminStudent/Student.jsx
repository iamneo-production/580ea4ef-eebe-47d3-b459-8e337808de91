
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Navbar from './Admin/Navbar';
import { useNavigate } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


export default function AddStudent() {
  const navigate = useNavigate();
  function gotoStudent() {
    navigate("/admin/addStudent")
  }

  function editStudent() {
    navigate("/admin/editStudent")
  }

  
  return (

    <>
      <Navbar Home="IAS Academy" Academy="Academy" Courses="Course" Students="Students" Logout="Logout" />
      <div className="search-bar">
        <label><input type="search" id="search" placeholder='Enter Student id to search here' size="40" /></label>
        <label> <button className="btn btn-success" type="submit" id="#searchButton" value="Search">Search</button></label>
      </div>
      <table className="table table-striped">
        <thead>
          <tr className="col">
            <th scope="col">Student ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Enrolled Course</th>
            <th scope="col">Mobile</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>clark</td>
            <td>Bob</td>
            <td>paxton</td>
            <td><button className="btn btn-light btn-sm" id="adminEditStudent" onClick={editStudent}> <BorderColorIcon />
            </button>
              <button className="btn btn-light btn-sm" id="btn2" onClick={gotoStudent}> <DeleteIcon /> </button>
            </td>
          </tr>
         
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><button className="btn btn-light btn-sm" id="adminEditStudent" onClick={editStudent}> <BorderColorIcon />
            </button>
              <button className="btn btn-light btn-sm" id="btn2" onClick={gotoStudent}> <DeleteIcon /> </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>twitter</td>
            <td><button className="btn btn-light btn-sm" id="adminEditStudent" onClick={editStudent}> <BorderColorIcon /></button>
              <button className="btn btn-light btn-sm" id="btn2" onClick={gotoStudent}> <DeleteIcon /> </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="addbtn">
        <button className="btn btn-light btn-lg" id="addStudent" onClick={gotoStudent}><AddCircleOutlineTwoToneIcon/> Add Student</button>
      </div>
    </>

  )
}
