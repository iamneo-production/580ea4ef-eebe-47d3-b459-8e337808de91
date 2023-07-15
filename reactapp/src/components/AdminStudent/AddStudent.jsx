import React, { useState } from 'react';
import Navbar from './Navbar';



const AddStudent = () => {

const [firstName,setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [gender, setGender] = useState("");
const [fatherName, setFatherName] = useState("");
const [phnno1, setPhnNo1] = useState("");
const [phnno2, setPhnNo2] = useState("");
const [motherName, setMotherName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");


const [houseNo, setHouseNo] = useState("");
const [streetName, setStreetName] = useState("");
const [areaName, setAreaName] = useState("");
const [pinCode, setPinCode] = useState("");
const [state, setState] = useState("");
const [nationality, setNationality] = useState("");

   return (

    <>
      <div>
        <Navbar Home="IAS Academy" Academy="Academy" Courses="Course" Students="Students" Logout="Logout" />
        <div className="details">
          <form >
            <label>
              <input type="text" name="name" id='firstName' placeholder="Enter your First Name" size="40" value={firstName} onChange={(event) => { setFirstName(event.target.value);}} />
              <input type="text" name="lname" id='lastName' placeholder="Enter your Last Name" size="40" value={lastName} onChange={(event) => {setLastName(event.target.value);}} />
              <input type="text" name="gender" id='gender' placeholder="Enter male or female" size="40" value={gender} onChange={(event) => {setGender(event.target.value);}} />
              <input type="text" name="fname" id='fatherName' placeholder="Enter your Father Name" size="40" value={fatherName} onChange={(event) => {setFatherName(event.target.value);}} />
              <input type="text" name="phno1" id='phoneNumber1' placeholder="Enter Phone Number" size="40" value={phnno1} onChange={(event) => {setPhnNo1(event.target.value);}} />
              <input type="text" name="phno2" id='phoneNumber2' placeholder="Enter Alternate Phone Number" size="40" value={phnno2} onChange={(event) => {setPhnNo2(event.target.value);}} /><br />
              <input type="text" name="mname" id='motherName' placeholder="Enter your Mother Name" size="40" value={motherName} onChange={(event) => {setMotherName(event.target.value); }} /><br />
              <input type="email" name="email" id='emailId' placeholder="Enter your Email-ID" size="40" value={email} onChange={(event) => {setEmail(event.target.value);}} /><br />
              <input type="age" name="age" id='age' placeholder="Enter your Age" size="40" value={age} onChange={(event) => { setAge(event.target.value);}} />
            </label>
          </form>
        </div>
        <div className="Address">
          <form>
            <b>Address Information</b><br />
            <label><b>House No:</b><input type="text" name="houseNo" id='houseNo' size="40" value={houseNo} onChange={(event) => { setHouseNo(event.target.value) }} /></label>
            <label><b>Street Name:</b> <input type="text" name="streetName" id='streetName' size="35" value={streetName} onChange={(event) => { setStreetName(event.target.value) }} /></label>
            <label><b>Area Name:</b><input type="text" name="areaName" id='areaName' size="25" value={areaName} onChange={(event) => { setAreaName(event.target.value) }} /></label>
            <label><b>Pincode:</b><input type="text" name="Pincode" id='Pincode' size="25" value={pinCode} onChange={(event) => { setPinCode(event.target.value) }} /></label>
            <label><b>State:</b><input type="text" name="Statee" id='State' size="25" value={state} onChange={(event) => { setState(event.target.value) }} /></label>
            <label><b>Nationality:</b><input type="text" name="Nationality" id='Nationality' size="25" value={nationality} onChange={(event) => { setNationality(event.target.value) }} /></label>
          </form>
        </div>
      </div>
      <div className="addbtn2">
        <button type="submit" className="btn btn-light btn-lg" id="addstudentbtn" >Add Student</button>
      </div>
    </>
  );
}

export default AddStudent;
