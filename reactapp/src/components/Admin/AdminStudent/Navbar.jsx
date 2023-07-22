import React from 'react'
import { Link } from 'react-router-dom'
import './NavStyles.css'



export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link
          className="navbar-brand"
          to="/home">
          {props.Home}
        </Link >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon"
          >
          </span>
        </button>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav" id="navbarNav">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/AdminInstitute"
              >
                {props.Academy}
              </Link >
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Admincourse"
              >
                {props.Courses}
              </Link >
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/admin/viewStudent"
              >
                {props.Students}
              </Link >
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
              >
                {props.Logout}
              </Link >
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}


