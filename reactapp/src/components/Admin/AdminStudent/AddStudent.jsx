import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {API_BASE_URL} from "../../../utils/APIUtils";

const AddStudent = () => {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_BASE_URL}/user`, user)
    .then((response) => {
      console.log(response);
      setUser(response.data);
      navigate("/admin/viewStudent");
    })
    .catch((error) => {
      console.log(error);
    });
   
  };

  return (

    <>
      <div>
        <Navbar
          Home="IAS Academy"
          Academy="Academy"
          Courses="Courses"
          Students="Students"
          Logout="Logout"
        />
        <div className="details">
          <form >

            <input
              type={"text"}
              name="firstName"
              id='firstName'
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
              id='lastName'
              placeholder="Enter your Last Name"
              size="40"
              value={lastName}
              required 
              onChange={(e) => onInputChange(e)}
            />

            <input
              type={"text"}
              name="gender"
              id='gender'
              placeholder="Enter male or female"
              size="40"
              value={gender}
              required 
              onChange={(e) => onInputChange(e)}
            />

            <input
              type={"text"}
              name="fatherName"
              id='fatherName'
              placeholder="Enter your Father Name"
              size="40"
              required 
              value={fatherName}
              onChange={(e) => onInputChange(e)}
            />

            <input
              type="tel"
              name="phnNo1"
              id='phoneNumber1'
              placeholder="Enter Phone Number"
              size="40"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              required 
              value={phnNo1}
              onChange={(e) => onInputChange(e)}
            />

            <input
              type="tel"
              name="phnNo2"
              id='phoneNumber2'
              placeholder="Enter Alternate Phone Number"
              size="40"
              value={phnNo2}
              required 
              onChange={(e) => onInputChange(e)}
            /><br />

            <input type={"text"}
              name="motherName"
              id='motherName'
              placeholder="Enter your Mother Name"
              size="40"
              value={motherName}
              required 
              onChange={(e) => onInputChange(e)}
            /><br />

            <input
              type="email"
              name="email"
              id='emailId'
              placeholder="Enter your Email-ID"
              autoComplete="off" size="40"
              value={email}
              required 
              onChange={(e) => onInputChange(e)}
            /><br />

            <input
              type="number"
              name="age"
              id='age'
              placeholder= "Enter your Age"
              size="40"
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
              id='houseNo'
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
              id='streetName' 
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
              id='areaName'
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
              id='pinCode'
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
              id='state'
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
              id='nationality'
              size="25"
              value={nationality}
              required 
              onChange={(e) => onInputChange(e)}
            />
          </form>
        </div >
      </div >
      //button
      <div className="addbtn2">
        <button type="submit" className="btn btn-light btn-lg" id="addstudentbtn" onClick={(e) => onSubmit(e)} >Add Student</button>
      </div>
    </>
  );
}
export default AddStudent;
