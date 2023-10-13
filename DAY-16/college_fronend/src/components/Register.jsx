import React, { useState } from "react";
import { userRegister } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Home.css";
import { ToastContainer, toast } from 'react-toastify';
import skctvid from "../assets/img/skctvid.mp4";

function Register() {
  const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        mobile: 0,
        email: '',
        password: '',
        role:'admin'
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
        console.log(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await userRegister(signup);
        if (res.data === "User registered successfully" && res.status==200) {
            toast.success(` Signup Successfull !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/login');
            }, 1000);

        } 
        
         else if (res.data==="Sommething went wrong!" && res.status==="400") {
            toast.error(`Sommething went wrong!`, {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

  return (
    <div className="centered-container">
      <div className="background-container">
        <video src={skctvid} autoPlay loop muted className="background-video" />
      </div>
      {/* Your navigation bar code here */}
      <div className="register-container">
        <div className="register-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="newUsername">New Username:</label>
              <input
                type="text"
                id="name"
                name="newUsername"
                placeholder="Enter your new username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="number"
                id="mobile"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="password"
                name="newPassword"
                placeholder="Enter your new password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your new password"
                // onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
