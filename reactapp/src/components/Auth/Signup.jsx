import { MenuItem } from '@mui/base';
import { Button, Grid, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from "../../utils/APIUtils";




const Signup = () => {
    const [processing, setProcessing] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let navigate = useNavigate();
  
    const [form, setForm] = useState({
        usertype:{value:""},
      username: { value: "" },
      email: { value: "" },
      mobilenumber: { value: "" },
      password: { value: "" },
      confirmpassword: { value: "" }
    });
  
    const handleChange = (e) => {
      let _form = { ...form };
      _form[e.target.name].value = e.target.value;
      setForm(_form);
    }

    const validateConfirmPassword = (e) => {
      if(e.target.value !== form.password.value){
        alert("Password and Confirm password should be same")
      }
    }

    //const validatePassword = () => {
      //if(form.password.value.length <5){
        //alert("Password must be greater than 5 characters");
        //return false;
      //}
      const validatePassword = () => {
        if(form.password.value.length <8){
          alert("Password should contain atleast 8 characters");
          return false;
        }
      if(form.confirmpassword.value !== form.password.value){
        alert("Password and Confirm password should be same")
        return false;
      }
      return true;
    }

    const validateMobileNumber = () => {
      if( !(form.mobilenumber.value.match('[0-9]{10}')) ){
        alert('Please provide valid phone number');
        return false;
      }
      return true;
    }

    const validateEmail = () =>{
      if (form.email.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email.value)) {
        alert('Invalid email address');
        return false;
      }
      return true;
    }

    const validateUser = () =>{
      if (!form.usertype.value ) {
        alert('Invalid User Type');
        return false;
      }
      return true;
    }

    const handleSelectChange = (e) => {
      console.log(e)
      let _form = { ...form };
      _form[e.target.name].value = e.target.value;
      setForm(_form);
      console.log(form.usertype.value)
    }
  
    const submitForm = async (e) => {
      e.preventDefault();
      
      if (validateUser() && validateEmail() && validatePassword() && validateMobileNumber()) {
        setProcessing(true);

        try {
          
          const signupRequest = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value,
            mobileNumber: form.mobilenumber.value,
            userRole:form.usertype.value
          };
          signup(signupRequest)
          .then(response => {
            console.log(response.message)
            if(response.message === "Success"){
              alert("Registered sucesfully");
            }else{
              alert("Failed to register, Please try again");
            }
            navigate(`/login`);
          }).catch(error => {
             
          });

        }
        catch (e) {
          console.log(e)
          setProcessing(false);
          alert("Something went wrong.");
        }
      } else {
        alert("All fields are required.");
      }
  
    }
  
  
    return (
      <Grid container className="page-container">
        <Grid item md={4} sm={6} xs={11} className="page-block">
          <span className="page-heading"> Register </span>
          <form className="mb-4" onSubmit={submitForm}>
          <TextField 
                select
                fullWidth
                label="Select User"
                SelectProps={{
                    native: true,
                  }}
                  helperText="Please select user Type"
                  variant="standard"
                  name="usertype"
                  id="admin/user"
              value={form.usertype.value} onChange={handleSelectChange}
            >
              <option key="def" value=""> Select User </option>
                <option key="admin" value="admin"> Admin </option>
                <option key="user" value="user"> User </option>
            </TextField>
            <TextField variant="standard" margin="normal" fullWidth id="email"
              label="Enter email" name="email"
              value={form.email.value} onChange={handleChange}
            />
            <TextField variant="standard" margin="normal" fullWidth id="username"
              label="Enter Username" name="username" autoFocus
              value={form.username.value} onChange={handleChange}
            />
            <TextField variant="standard" margin="normal" fullWidth id="mobileNumber"
              label="Enter Mobilenumber" name="mobilenumber" autoFocus
              value={form.mobilenumber.value} onChange={handleChange}
            />
            <TextField variant="standard" margin="normal" id="password"
              label="Password*" type={"password"} fullWidth name="password"
              onChange={handleChange}
              value={form.password.value}
            />
             <TextField variant="standard" margin="normal" id="confirmPassword" 
              label="Confirm Password*" type={"password"}  fullWidth name="confirmpassword"
              onBlur={validateConfirmPassword}
              onChange={handleChange}
              value={form.confirmpassword.value}
            />
            <Button type="submit" fullWidth variant="contained" id='submitButton' color="primary" disabled={processing}>
              {processing ? "Processing..." : "Submit"}
            </Button>
            <p>
            Already a user?<NavLink id='signinLink' to={'/login'}>Login</NavLink>
            </p>
  
          </form>
        </Grid>
      </Grid>)
}

export default Signup;