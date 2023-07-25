
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {API_BASE_URL} from "../../../utils/APIUtils";


export default function Student() {
  const navigate = useNavigate();
  function gotoStudent() {
    navigate("/admin/addStudent")
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers = async () => {
     await axios.get(`${API_BASE_URL}/admin/viewStudent`)
    .then((response) => {
      console.log(response);
      setUsers(response.data);

    })
    .catch((error) => {
      console.log(error);
    });
  };


  const deleteUser = async (studentId) => {
    await axios.delete(`${API_BASE_URL}/admin/deleteStudent/${studentId}`)
    .then((response) => {
      console.log(response);
      loadUsers();
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
  return (

    <>
      <Navbar
        Home="IAS Academy"
        Academy="Academy"
        Courses="Course"
        Students="Students"
        Logout="Logout"
      />
      {/* <div className="search-bar">
        <label>
          <input
            type="search"
            id="search"
            placeholder='Enter studentId to search here'
            size="30"
          />
        </label>
        <label>
          <button
            className="btn btn-success"
            type="submit"
            id="#searchButton"
            value="Search">
            Search
          </button>
        </label> */}
      {/* </div> */}
      <table className="table table-striped">
        <thead className='table1'>
          <tr className="col">
            <th scope="col">studentId</th>
            <th scope="col">Student Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">E-mail</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.studentId}>
                <th scope="row" >
                  {user.studentId}
                </th>
                <td>{user.firstName + " " + user.lastName}</td>
                <td>{user.phnNo1}</td>
                <td>{user.email}</td>
                <td>
                  <button id="adminEditStudent">
                    <Link
                      className="btn btn-outline-info btn-sm"
                      to={`/admin/editStudent/${user.studentId}`}>
                      <BorderColorIcon />
                    </Link>
                  </button>

                  <button
                    className="btn btn-outline-danger"
                    id="adminDeleteStudent"
                    onClick={() => deleteUser(user.studentId)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="addbtn">
        <button className="btn btn-light btn-lg"
          id="addStudent"
          onClick={gotoStudent}>
          <AddCircleOutlineTwoToneIcon />
          Add Student
        </button>
      </div>
    </>

  )
}
