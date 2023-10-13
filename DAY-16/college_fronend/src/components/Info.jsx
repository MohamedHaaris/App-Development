import React, { useState } from "react";
import "../assets/css/Info.css";
import { userInfo } from "../services/api";
import { useNavigate } from "react-router-dom";

const Info = () => {
    const [gender, setGender] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    socialStatus: "",
    aadharNumber: "",
    parentName: "",
    parentNumber: "",
    parentRelation: "",
    addressLine1: "",
    addressLine2: "",
    zipcode: "",
    state: "",
    district: "",
    city: "",
    nationality: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="portheads">SKCT Online Admission Portal</div>
      <form onSubmit={handleSubmit} className="registration">
        <div className="info-total">
          <div className="info-left">
            <div className="label-name">
              <label className="label-value">Name</label>
              <input className="label-input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <label className="label-value">Gender</label>
      <div className="label-name">
        <label className="label-value">
          <input className="label-input"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label className="label-value">
          <input className="label-input"
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label className="label-value">
          <input className="label-input"
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleChange}
          />
          Other
        </label>
      </div>
            <div className="label-name">
              <label label className="label-value">Name</label>
              <input className="label-input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="label-name">
            <label className="label-value">Email Address</label>
            <input className="label-input"
              type="email"
              name="email"
              // value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              required
            />
          </div>
            <div className="label-name">
            <label className="label-value">Aadhar Number</label>
            <input className="label-input"
              type="email"
              name="email"
              // value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              required
            />
          </div>
          <div className="label-name">
              <label className="label-value">Parent's/Guardian's Name</label>
              <input className="label-input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          <div className="label-name">
              <label className="label-value">Parent's/Guardian's Relation</label>
              <input className="label-input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="label-name">
            <label className="label-value">Parent's/Guardian' Phone</label>
            <input className="label-input"
              type="tel"
              
              name="contactNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              maxLength="10"
              placeholder="Enter your phone number"
              pattern="[7-9]{1}[0-9]{9}"
              title="Please enter valid phone number"
              required
            />
          </div>
          </div>
          <div className="info-right">
          <div className="label-name">
          <label className="label-value">Adress Line 1</label>
          <input className="label-input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              cols="30"
              rows="5"
              placeholder="Enter your address"
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$"
              maxLength="100"
              required
            ></input>
          </div>
          <div className="label-name">
          <label className="label-value">Adress Line 2</label>
          <input className="label-input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              cols="30"
              rows="5"
              placeholder="Enter your address"
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$"
              maxLength="100"
              required
            ></input>
          </div>
          <div className="label-name">
            <label className="label-value">Pincode</label>
            <input className="label-input"
              type="text"
              name="zipCOde"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your pin code"
              maxLength="6"
              pattern="^[0-9]{6}$"
              required
            />
          </div>
          <div className="label-name">
          <label className="label-value">State</label>
          <input className="label-input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              cols="30"
              rows="5"
              placeholder="Enter your address"
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$"
              maxLength="100"
              required
            ></input>
          </div>
          <div className="label-name">
          <label className="label-value">District</label>
          <input className="label-input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              cols="30"
              rows="5"
              placeholder="Enter your address"
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$"
              maxLength="100"
              required
            ></input>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Info;
