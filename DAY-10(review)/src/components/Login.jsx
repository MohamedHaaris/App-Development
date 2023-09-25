import React, { useState } from 'react';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { FcViewDetails } from "react-icons/fc";
import { GrCircleInformation } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { TbMailCheck } from "react-icons/tb";
import '../assets/css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login1 } from '../redux/userSlice';
import { selectUser } from '../redux/userSlice';

import { useSelector } from 'react-redux/es/hooks/useSelector';

const Login = () => {
  const nav=useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(selectUser);

  const [showLogin, setShowLogin] = useState(true);
  const [loginError, setLoginError] = useState('');

  const toggleForm = () => {
    setShowLogin(!showLogin);
    if (!showLogin) {
      setFormData({
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        mobileNumber: '+91',
        email: '',
        confirmPassword: '',
      });
      setFormErrors({
        usernameError: '',
        passwordError: '',
        newUsernameError: '',
        newPasswordError: '',
        mobileNumberError: '',
        emailError: '',
        confirmPasswordError: '',
      });
    }
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    newUsername: '',
    newPassword: '',
    mobileNumber: '+91',
    email: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    usernameError: '',
    passwordError: '',
    newUsernameError: '',
    newPasswordError: '',
    mobileNumberError: '',
    emailError: '',
    confirmPasswordError: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name + 'Error']: '',
    });

    console.log(`Typing ${name}: ${value}`);
  };

  const login = (username, password) => {
    console.log(`Logging in with username: ${username}, password: ${password}`);
    // Here, you can add your login logic, such as making an API request to authenticate the user
    // If login fails, you can set an error message.
    
  };

  const register = (newUser) => {
    console.log(`Registering user:`, newUser);
    // Here, you can add your registration logic, such as making an API request to create a new user
  };

  const validateLoginForm = () => {
    const errors = {};
    if (!formData.username) {
      errors.usernameError = 'Username is required';
    }
    if (!formData.password) {
      errors.passwordError = 'Password is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateRegistrationForm = () => {
    const errors = {};
    if (!formData.newUsername) {
      errors.newUsernameError = 'New Username is required';
    }
    if (!formData.mobileNumber) {
      errors.mobileNumberError = 'Mobile Number is required';
    }
    if (!formData.email) {
      errors.emailError = 'Email is required';
    }
    if (!formData.newPassword) {
      errors.newPasswordError = 'New Password is required';
    }
    if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPasswordError = 'Passwords do not match';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login1(
      formData.username))


      console.log(user);
      nav("/dashboard")



    if (validateLoginForm()) {
      login(formData.username, formData.password);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (validateRegistrationForm()) {
      const newUser = {
        username: formData.newUsername,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        password: formData.newPassword,
      };
      
      register(newUser);

      setShowLogin(true);

      setFormData({
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        mobileNumber: '+91',
        email: '',
        confirmPassword: '',
      });

      setFormErrors({
        usernameError: '',
        passwordError: '',
        newUsernameError: '',
        newPasswordError: '',
        mobileNumberError: '',
        emailError: '',
        confirmPasswordError: '',
      });
    }
  };

  return (
    <div>
      <div className="porthead">SKCT Online Admission Portal</div>
      <div className="login-page">
        <div className="left-side">
          <h1>LET YOUR </h1><label></label>
          <h1>SUCCESS JOURNEY </h1><label></label>
          <h1>BEGINS WITH</h1> <label></label>
          <h1>SKCT</h1>
        </div>
        <div className="right-side">
          <div className="form-container">
            <div className="toggle-buttons">
              <button className={showLogin ? 'active' : ''} onClick={toggleForm}>Login</button>
              <button className={!showLogin ? 'active' : ''} onClick={toggleForm}>Register</button>
            </div>
            <div className={`form-content ${showLogin ? 'login-form' : 'register-form'}`}>
              {showLogin ? (
                <>
                  <h2>Login</h2>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                      <div className="error">{formErrors.usernameError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <div className="error">{formErrors.passwordError}</div>
                    </div>
                    {loginError && <div className="error">{loginError}</div>}
                    <button type="submit" >Login</button>
                  </form>
                </>
              ) : (
                <>
                  <h2>Register</h2>
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="form-group">
                      <label htmlFor="newUsername">New Username:</label>
                      <input
                        type="text"
                        id="newUsername"
                        name="newUsername"
                        placeholder="Enter your new username"
                        value={formData.newUsername}
                        onChange={handleChange}
                        required
                      />
                      <div className="error">{formErrors.newUsernameError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobileNumber">Mobile Number:</label>
                      <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Enter your mobile number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                      />
                      <div className="error">{formErrors.mobileNumberError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <div className="error">{formErrors.emailError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="newPassword">New Password:</label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        placeholder="Enter your new password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                      />
                      <div className="error">{formErrors.newPasswordError}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your new password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <div className="error">{formErrors.confirmPasswordError}</div>
                    </div>
                    <button type="submit" >Register</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="moveicon-down">
        <div className={`icons-container ${showLogin ? 'login-icons' : 'register-icons'}`}>
          <TbMailCheck className='icons' />
          <div className="line"></div>
          <div className="icon-text">Register with email</div>
        </div>
        <div className={`icons-container ${showLogin ? 'login-icons' : 'register-icons'}`}>
          <GrCircleInformation className='icons'/>
          <div className="line"></div>
          <div className="icon-text">Personal Information</div>
        </div>
        <div className={`icons-container ${showLogin ? 'login-icons' : 'register-icons'}`}>
          <BsFileEarmarkText className='icons'/>
          <div className="line"></div>
          <div className="icon-text">Application</div>
        </div>
        <div className={`icons-container ${showLogin ? 'login-icons' : 'register-icons'}`}>
          <MdPayment className='icons'/>
          <div className="line"></div>
          <div className="icon-text">Payment</div>
        </div>
        <div className={`icons-container ${showLogin ? 'login-icons' : 'register-icons'}`}>
          <FcViewDetails className='icons'/>
          <div className="line"></div>
          <div className="icon-text">Academic Details</div>
        </div>
        <div className={`icons-container ${showLogin ? 'login-icons' : 'register-icons'}`}>
          <AiOutlineCloudUpload className='icons'/>
          <div className="icon-text">Upload Documents</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
