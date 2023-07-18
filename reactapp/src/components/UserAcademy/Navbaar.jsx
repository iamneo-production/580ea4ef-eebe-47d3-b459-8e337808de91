import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbaar.css"

function Navbaar() {
  function handleLogout(){
    localStorage.setItem("userModel",null);
    }
  return (
    <nav className="navbar">
      <div>
        <NavLink   className="navbar-link" activeClassName="active">IAS Academy</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink  to="/" className="navbar-link" activeClassName="active" id="userAcademy">Academy</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/user/Enrolledcourse" className="navbar-link" activeClassName="active" id="userEnrolledCourse">Enrolledcourse</NavLink>
      </div>
      <div>
        <NavLink to="/login" className="navbar-link" activeClassName="active"  id="logout" onClick={handleLogout}>Logout</NavLink>
      </div>
    </nav>
  );
}


export default Navbaar;