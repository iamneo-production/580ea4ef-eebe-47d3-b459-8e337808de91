import React, { useEffect } from 'react';
import {Button, Grid } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminHome = () => {
    let navigate = useNavigate();

    useEffect(() => {
        console.log("Welcome");
    }, []);

    
    const handleLogout = (e) => {
        localStorage.removeItem("token");
        navigate(`/login`);
      }


    return (
        <Grid container className="page-container">
          <Grid item md={4} sm={6} xs={11} className="page-block">
            <p className="page-heading">
              Welcome Admin
              <br />
            </p>
            <Button id='logoutButton' onClick={handleLogout} variant="contained" color="primary" >Logout </Button>
          </Grid>
        </Grid>)
}

export default AdminHome;