import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbaar.css"

function Navbaar() {
  function handleLogout(){
    localStorage.setItem("userModel",null);
    }
  return (
    <nav className="navbaar">
      <div>
        <NavLink   className="navbaar-link" activeClassName="active">IAS Academy</NavLink>
      </div>
      <div className="navbaar-links">
        <NavLink  to="/user/Academy" className="navbaar-link" activeClassName="active" id="userAcademy">Academy</NavLink>
      </div>
      <div className="navbaar-links">
        <NavLink to="/user/Enrolledcourse" className="navbaar-link" activeClassName="active" id="userEnrolledCourse">Enrolledcourse</NavLink>
      </div>
      <div>
        <NavLink to="/login" className="navbaar-link" activeClassName="active"  id="logout" onClick={handleLogout}>Logout</NavLink>
      </div>
    </nav>
  );
}


export default Navbaar;