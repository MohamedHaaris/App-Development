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
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { userRegister } from '../services/api';
import { adminLogin,userLogin } from "../services/api";

const Login = () => {
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        password: ''
    });
    const [logins, setLogins] = useState({
        email: '',
        password: ''
    });



    const handleChange = (e) => {
      const { id, name, value } = e.target;
    
     
      if (id) {
        setSignin({ ...signin, [id]: value });
      }
      if(id) {
        setLogins({...login,[id]: value})
      }
     
      if (name) {
        setFormData({
          ...formData,
          [name]: value,
        });
        setFormErrors({
          ...formErrors,
          [name + 'Error']: '', 
        });
      }
    };
    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      const res = await userLogin(signin);
      console.log(res.data);
      
      
      if((res.status) == "200" && (res.data.role)== "STUDENT"){

          localStorage.setItem('Token', res.data.token);
          localStorage.setItem('Role', res.data.role);
          localStorage.setItem('StudentEmail', res.data.email);

          toast.success(` Welcome ${res.data.name} !`, {
              position: "center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
          setTimeout(() => {
              navigate('/');
          }, 4000);
      }
      
      
      else {
          toast.error(` Invalid Email | Password !`, {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
      } 
  };
    const handleAdminSubmit = async (e) => {
      e.preventDefault();
      const res = await adminLogin(logins);
      console.log(res.data);
      
      
      
      if((res.status) == "200" && (res.data.role)== "ADMIN"){

        localStorage.setItem('Token', res.data.token);
        localStorage.setItem('Role', res.data.role);
        localStorage.setItem('AdminEmail', res.data.email);

        toast.success(` Welcome ${res.data.name} !`, {
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
            navigate('/dashboard');
        }, 1000);
    }
      
      else {
          toast.error(` Invalid Email | Password !`, {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
      } 
  };

  const dispatch = useDispatch();
  const user=useSelector(selectUser);

  const [showLogin, setShowLogin] = useState(true);
  const [loginError, setLoginError] = useState('');
  
  const toggleForm = () => {
    setShowLogin(!showLogin);
    if (!showLogin) {
      setFormData({
        email: '',
        password: '',
        
      });
      setFormErrors({
        
        emailError: '',
        passwordError: '',
       
        
      });
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
   
  });

  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
    
  });

  

  const login = (username, password) => {
    console.log(`Logging in with username: ${username}, password: ${password}`);
  
  };

  const register =async (newUser) => {
    console.log(`Registering user:`, newUser);
    await userRegister(newUser).then((response)=>{
      console.log(response);
    }).catch((error=>{
      console.log(error);
    }));
  
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
   
    if (!formData.email) {
      errors.emailError = 'Email is required';
    }
   
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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
              <button className={showLogin ? 'active' : ''} onClick={toggleForm}>User</button>
              <button className={!showLogin ? 'active' : ''} onClick={toggleForm}>Admin</button>
            </div>
            <div className={`form-content ${showLogin ? 'login-form' : 'register-form'}`}>
              {showLogin ? (
                <>
                  <h2>User</h2>
                  <form onSubmit={handleLoginSubmit}>
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
                  <h2>Admin</h2>
                  <form onSubmit={handleAdminSubmit}>
                   
                    
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
      <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    </div>
  );
}

export default Login;
