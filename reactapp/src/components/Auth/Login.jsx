import React, {useState } from 'react';
import { Button, Grid, TextField } from "@mui/material";
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../utils/APIUtils';

const Login = () => {
    
    const [processing, setProcessing] = useState(false);
    let navigate = useNavigate();

    const [form, setForm] = useState({
        email: { value: "" },
        password: { value: "" }
      });

      const handleChange = (e) => {
        let _form = { ...form };
        _form[e.target.name].value = e.target.value;
        setForm(_form);
      }

      const submitForm = async (e) => {
        e.preventDefault();
        if (form.email.value && form.password.value) {
          setProcessing(true);
    
          try {
            const loginRequest = {
                email: form.email.value,
                password: form.password.value
            };
            let data = await login(loginRequest);
            console.log(data)
            if (data.status) {
              alert("Login successful")
              setProcessing(false); 
              localStorage.setItem("token", data);
              if(data.userRole == "user"){
                navigate(`/`);
              }else{
                navigate(`/adminhome`);
              }
            } else {
              setProcessing(false);
              alert("Failed to Login, Please validate credentials");
            }
          }
          catch (e) {
            console.log("e",e);
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
            <span className="page-heading"> Login </span>
            <form className="mb-4" onSubmit={submitForm}>
              <TextField variant="standard" margin="normal" fullWidth id='email'
                label="Enter email" name="email" autoFocus 
                value={form.email.value} onChange={handleChange}
                />
              <TextField variant="standard" margin="normal" id='password'
                label="Enter Password*" type={"password"} fullWidth name="password"
                value={form.password.value} onChange={handleChange}
              />
              <Button id='loginButton' type="submit" fullWidth disabled={processing} variant="contained" color="primary" > {processing ? "Processing..." : "Login"} </Button>
              <p>
                New User/admin <NavLink id='signupLink' to={'/signup'}>Sign Up</NavLink>
              </p>
            </form>
          </Grid>
        </Grid>)
}

export default Login;
//login is working fine 
