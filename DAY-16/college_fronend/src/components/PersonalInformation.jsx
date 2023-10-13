import React, { useState } from 'react';
import '../assets/css/PersonalInformation.css';
import { userInfo } from '../services/api';
import { useNavigate } from 'react-router-dom';


const PersonalInformation = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firtName: '',
    lastName: '',
    gender: '',
    age: '',
    dateOfBirth: '',
    email: '',
    aadhar:'',
    contactNumber: '',
    address: '',
    city:'',
    state: '',
    zipCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  
   const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userInfo(info);
        if (res.status==200) {
            
           
                navigate('/view');
            

        } 
        
   }
   const [students, setStudents] = useState([]);

  return (
    <div className="wrapper">
       {/* <StudentList students={students} gender={info.gender} /> */}
      <div className="title">Student Registration Form</div>
      <form onSubmit={handleSubmit}>
        <div className="form">

          <div className="inputfield">
            <label>First Name</label>
            <input
              type="text"
              className="input"
              name="firstName"
              // value={formData.fname}
              onChange={handleInputChange}
              placeholder="Enter first name"
              maxLength="30"
              pattern="[A-Za-z]{1,32}"
              title="Enter only alphabets"
              required
            />
          </div>

          <div className="inputfield">
            <label>Last Name</label>
            <input
              type="text"
              className="input"
              name="lastName"
              // value={formData.lname}
              onChange={handleInputChange}
              placeholder="Enter last name"
              maxLength="30"
              pattern="[A-Za-z]{1,32}"
              title="Enter only alphabets"
              required
            />
          </div>

          <div className="inputfield" id="gender">
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              // checked={formData.gender === 'Male'}
              onChange={handleInputChange}
              required
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              // checked={formData.gender === 'Female'}
              onChange={handleInputChange}
              required
            />
            <label>Female</label>
          </div>

          <div className="inputfield">
            <label>Age</label>
            <input
              type="text"
              className="input"
              name="age"
              // value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              maxLength="2"
              pattern="^[0-9]{2}$"
              required
            />
          </div>

          <div className="inputfield">
            <label>Date of Birth</label>
            <input
              type="date"
              className="input"
              name="dateOfBirth"
              // value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputfield">
            <label>Email Address</label>
            <input
              type="email"
              className="input"
              name="email"
              // value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              required
            />
          </div>

           <div className="inputfield">
            <label>Password</label>
            <input
              type="password"
              className="input"
              name="password"
              // value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password min 8 characters"
              autoComplete="off"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              maxLength="100"
              minLength="8"
              required
            />
          </div>

          <div className="inputfield">
            <label>Confirm Password</label>
            <input
              type="password"
              className="input"
              name="confirmPassword"
              // value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm password"
              autoComplete="off"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              maxLength="100"
              minLength="8"
              required
            />
          </div> 

          <div className="inputfield">
            <label>Phone Number</label>
            <div className="custom-select" id="phone-codes">
              <select name="phoneNumberCode" onChange={handleInputChange}>
                <option value="+91">+91</option>
              </select>
            </div>
            <input
              type="tel"
              className="input"
              name="contactNumber"
              // value={formData.phoneNumber}
              onChange={handleInputChange}
              maxLength="10"
              placeholder="Enter your phone number"
              pattern="[7-9]{1}[0-9]{9}"
              title="Please enter valid phone number"
              required
            />
          </div>

          <div className="inputfield">
            <label>Address</label>
            <textarea
              className="textarea"
              name="address"
              // value={formData.address}
              onChange={handleInputChange}
              cols="30"
              rows="5"
              placeholder="Enter your address"
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$"
              maxLength="100"
              required
            ></textarea>
          </div>

          {/* <div className="inputfield">
            <label>State</label>
            <div className="custom_select">
              <select name="state" onChange={handleInputChange} required>
                <option value="">--Select your state--</option>
                <option>Tamil Nadu</option>
              </select>
            </div>
          </div> */}

          <div className="inputfield">
            <label>City</label>
            <input
              type="text"
              className="input"
              name="city"
              // value={formData.pincode}
              onChange={handleInputChange}
              placeholder="Enter your pin code"
              maxLength="6"
              pattern="^[0-9]{6}$"
              required
            />
          </div>
          <div className="inputfield">
            <label>Pin Code</label>
            <input
              type="text"
              className="input"
              name="zipCode"
              // value={formData.pincode}
              onChange={handleInputChange}
              placeholder="Enter your pin code"
              maxLength="6"
              pattern="^[0-9]{6}$"
              required
            />
          </div>

          

          {/* <div className="inputfield">
            <label>Upload Photo</label>
            <p id="file-size">*Max size 100kb.</p>
            <input
              type="file"
              name="myfile"
              id="myfile"
              onChange={handleFileChange}
              required
            />
          </div> */}

          <div className="inputfield terms">
            <label className="check">
              <input
                type="checkbox"
                name="check"
               
                // onChange={(e) => setFormData({ ...formData, check: e.target.checked })}
                required
              />
              <span className="checkmark"></span>
            </label>
            <p>I hereby declare that the above information provided is true and correct.</p>
          </div>

          <div className="inputfield" required>
            <div data-netlify-recaptcha="true"></div>
          </div>

          <div className="inputfield btns" id="btn">
            <button type="submit" className="btn">
              Register
            </button>
            
          </div>

        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;



