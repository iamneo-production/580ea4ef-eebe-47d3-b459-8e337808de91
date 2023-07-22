import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from "../../../utils/APIUtils";
import './Studentdetails.css';

export default function EditStudent() {
  const { studentId } = useParams();

  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    fatherName: "",
    phnNo1: "",
    phnNo2: "",
    motherName: "",
    email: "",
    age: "",
    houseNo: "",
    streetName: "",
    areaName: "",
    pinCode: "",
    state: "",
    nationality: ""
  });

  const { firstName, lastName, gender, fatherName, phnNo1, phnNo2, motherName,
    email, age, houseNo, streetName, areaName, pinCode, state, nationality } = user;



  const onInputChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  //To load the data about a specific Student

  const loadUser = async () => {
     await axios.get(`${API_BASE_URL}/user/${studentId}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
    //setUser(result.data);

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API_BASE_URL}/user/${studentId}`, user);
    navigate("/admin/viewStudent");
  };

  return (

    <>
      <div>
        <Navbar
          Home="IAS Academy"
          Academy="Academy"
          Courses="Course"
          Students="Students"
          Logout="Logout"
        />
        <div className="details">
          <form >

            <input
              type={"text"}
              name="firstName"
              id='editFirstName'
              placeholder="Enter your First Name"
              autoComplete="off"
              size="40"
              value={firstName}
              required
              onChange={(e) => onInputChange(e)}
            />

            <input
              type={"text"}
              name="lastName"
              id='editLastName'
              placeholder="Enter your Last Name"
              size="40"
              value={lastName}
              required
              onChange={(e) => onInputChange(e)}
            />

            <input
              type={"text"}
              name="gender"
              id='editGender'
              placeholder="Enter male or female"
              size="40"
              value={gender}
              required
              onChange={(e) => onInputChange(e)}
            />

            <input
              type={"text"}
              name="fatherName"
              id='editFatherName'
              placeholder="Enter your Father Name"
              size="40"
              required
              value={fatherName}
              onChange={(e) => onInputChange(e)}
            />

            <input
              type="tel"
              name="phnNo1"
              id='editPhoneNumber1'
              placeholder="xxxx-xxx-xxx"
              size="40"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              required
              value={phnNo1}
              onChange={(e) => onInputChange(e)}
            />

            <input
              type="tel"
              name="phnNo2"
              id='editPhoneNumber2'
              placeholder="Enter Alternate Phone Number"
              size="40"
              value={phnNo2}
              required
              onChange={(e) => onInputChange(e)}
            /><br />

            <input type={"text"}
              name="motherName"
              id='editMotherName'
              placeholder="Enter your Mother Name"
              size="40"
              value={motherName}
              required
              onChange={(e) => onInputChange(e)}
            /><br />

            <input
              type="email"
              name="email"
              id='editEmailstudentId'
              placeholder="Enter your Email-studentId"
              autoComplete="off" size="40"
              value={email}
              required
              onChange={(e) => onInputChange(e)}
            /><br />

            <input
              type="number"
              name="age"
              id='editAge'
              placeholder="Enter your Age"
              size="60"
              value={age}
              required
              onChange={(e) => onInputChange(e)}
            />

          </form>
        </div>

        <div className="Address">
          <form>

            <b>Address Information</b><br />
            <label>
              <b>House No :</b>
            </label>
            <input
              type={"text"}
              name="houseNo"
              id='editHouseNo'
              size="25"
              value={houseNo}
              required
              onChange={(e) => onInputChange(e)}
            />

            <label>
              <b>Street Name:</b>
            </label>
            <input
              type={"text"}
              name="streetName"
              id='editStreetName'
              size="25"
              value={streetName}
              required
              onChange={(e) => onInputChange(e)}
            /><br />

            <label className='areaName'>
              <b>Area Name:</b>
            </label>
            <input
              type={"text"}
              name="areaName"
              id='editAreaName'
              size="24"
              value={areaName}
              required
              onChange={(e) => onInputChange(e)}
            />

            <label className="pincode">
              <b>Pincode:</b>
            </label>
            <input
              type={"text"}
              name="PinCode"
              id='editPinCode'
              size="25"
              value={pinCode}

              required
              onChange={(e) => onInputChange(e)}
            /><br />

            <label className='state'>
              <b>State:</b>
            </label>
            <input
              type={"text"}
              name="state"
              id='editState'
              size="25"
              value={state}
              required
              onChange={(e) => onInputChange(e)}
            />

            <label className='nationality'>
              <b>Nationality:</b>
            </label>
            <input
              type={"text"}
              name="nationality"
              id='editNationality'
              size="25"
              value={nationality}
              required
              onChange={(e) => onInputChange(e)}
            />
          </form>
        </div >
      </div >
      <div className="updatestudentbtn">
        <button className="btn btn-light btn-lg" id="updateStudent" onClick={(e) => onSubmit(e)}>Update Student</button>
      </div>
    </>

  )
}