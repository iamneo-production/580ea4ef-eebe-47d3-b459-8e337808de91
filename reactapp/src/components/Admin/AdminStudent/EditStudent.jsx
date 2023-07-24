import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from "../../../utils/APIUtils";

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
      
        <Navbar
          Home="IAS Academy"
          Academy="Academy"
          Courses="Course"
          Students="Students"
          Logout="Logout"
        />
         <div className="details">
        <form>
          <label>
            <input
              type={"text"}
              name="firstName"
              id='firstName'
              placeholder="Enter your First Name"
              autoComplete="off"
              size="35"
              value={firstName}
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <label>
            <input
              type={"text"}
              name="lastName"
              id='lastName'
              placeholder="Enter your Last Name"
              size="35"
              value={lastName}
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <label>
            <input
              type={"text"}
              name="gender"
              id='gender'
              placeholder="Enter male or female"
              size="35"
              value={gender}
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <label>
            <input
              type={"text"}
              name="fatherName"
              id='fatherName'
              placeholder="Enter your Father Name"
              size="35"
              required
              value={fatherName}
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <label>
            <input
              type="tel"
              name="phnNo1"
              id='phoneNumber1'
              placeholder="Enter Phone Number"
              size="35"
              pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
              required
              value={phnNo1}
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <label>
            <input
              type="tel"
              name="phnNo2"
              id='phoneNumber2'
              placeholder="Enter Alternate Phone Number"
              size="35"
              value={phnNo2}
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </form>
      </div>
      <div className="container1">
        <form>
          <label>
            <input type={"text"}
              name="motherName"
              id='motherName'
              placeholder="Enter your Mother Name"
              size="35"
              value={motherName}
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>

          <label>

            <input
              type="email"
              name="email"
              id='emailId'
              placeholder="Enter your Email-ID"
              autoComplete="off"
              size="35"
              value={email}
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>
          <label>
            <input
              type="number"
              name="age"
              id='age'
              placeholder="Enter your Age"
              size="100"
              width="25%"
              value={age}
              required
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </form>
        </div>

        <div className="Address">
        <form>
          <b>Address Information</b>
          <br/>
          <label className='houseNo'>
            <b>House No :</b>
          </label>
          <input
            type={"text"}
            name="houseNo"
            id='houseNo'
            size="20"
            value={houseNo}
            required
            onChange={(e) => onInputChange(e)}
          />

          <label className='streetName'>
            <b>Street Name:</b>
          </label>
          <input
            type={"text"}
            name="streetName"
            id='streetName'
            size="20"
            value={streetName}
            required
            onChange={(e) => onInputChange(e)}
          />

          <label className='areaName'>
            <b>Area Name:</b>
          </label>
          <input
            type={"text"}
            name="areaName"
            id='areaName'
            size="20"
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
            size="20"
            value={pinCode}
            required
            onChange={(e) => onInputChange(e)}
          />
          <br/>
          <label className='state'>
            <b>State:</b>
          </label>
          <input
            type={"text"}
            name="state"
            id='state'
            size="20"
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
            size="20"
            value={nationality}
            required
            onChange={(e) => onInputChange(e)}
          />
        </form>
      </div >

      <div className="updatestudentbtn">
        <button className="btn btn-light btn-lg" id="updateStudent" onClick={(e) => onSubmit(e)}>Update Student</button>
      </div>
    </>

  )
}
