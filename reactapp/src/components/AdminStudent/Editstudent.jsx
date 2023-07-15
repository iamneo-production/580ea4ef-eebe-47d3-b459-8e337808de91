import React from 'react'
import Navbar from './Navbar';
export default function EditStudent(props) {

  return (

    <>
      <div>
        <Navbar Home="IAS Academy" Academy="Academy" Courses="Course" Students="Students" Logout="Logout" />
        <container className="details">
          <form>
            <label>
              <input type="text"  name="name" id='firstName' placeholder="Enter your First Name" size="40" value={props.name} />
              <input type="text"  name="lname" id='lasstName' placeholder="Enter your Last Name" size="40" value={props.name} />
              <input type="text"  name="gender" id='firstName' placeholder="Enter male or female" size="40" value={props.name} />
              <input type="text"  name="fname" id='fatherName' placeholder="Enter your Father Name" size="40" value={props.name} />
              <input type="text"  name="phno1" id='phoneNumber1' placeholder="Enter Phone Number" size="40" value={props.name} />
              <input type="text"  name="phno2" id='phoneNumber2' placeholder="Enter Alternate Phone Number" size="40" value={props.name} /><br />
              <input type="text"  name="mname" id='motherName' placeholder="Enter your Mother Name" size="40" value={props.motherName} /><br />
              <input type="email"  name="email" id='emailId' placeholder="Enter your Email-ID" size="40" value={props.email} /><br />
              <input type="age"  name="age" id='age' placeholder="Enter your Age" size="40" value={props.age} />
            </label>
          </form>
        </container>
        <div className="Address">
          <b>Address Information</b><br />
          <label><b>House No:</b><input type="text"  name="houseNo" id='houseNo' size="40" value={props.name} /></label>
          <label><b>Street Name:</b> <input type="text"  name="streetName" id='streetName' size="35" value={props.name} /></label>
          <label><b>Area Name:</b><input type="text"  name="areaName" id='areaName' size="25" value={props.name} /></label>
          <label><b>Pincode:</b><input type="text"  name="Pincode" id='Pincode' size="20" value={props.name} /></label>
          <label><b>State:</b><input type="text" name="State" id='State' size="25" value={props.name} /></label>
          <label><b>Nationality:</b><input type="text"  name="Nationality" id='Nationality' size="25" value={props.name} /></label>
        </div>
      </div>
      <div className="updatestudentbtn">
        <button className="btn btn-light btn-lg" id="updateStudent">Update Student</button>
      </div>
    </>

  )
}
