import '../assets/css/Dashboard.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import smalllogo from '../assets/img/smalllogo.png';
 // Import your CSS file

function Dashboard() {
  const user = useSelector(selectUser);
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
              <div className="logo">
          <img width="50px" height="50px" src={smalllogo} alt="" />
              <span className="nav-item">Dashboard</span>
        </div>
          </li>
          <li>
          <Link to="/" className="logouts">
              <i className="fas fa-home"></i>
              <span className="nav-item">Home</span>
            </Link>
          </li>
          <li>
          <Link to="" className="logouts">
              <i className="fas fa-user"></i>
              <span className="nav-item">Profile</span>
            </Link>
          </li>
          <li>
          <Link to="" className="logouts">
              <i className="fas fa-wallet"></i>
              <span className="nav-item">Wallet</span>
            </Link>
          </li>
          <li>
          <Link to="" className="logouts">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">Analytics</span>
            </Link>
          </li>
          <li>
          <Link to="" className="logouts">
              <i className="fas fa-tasks"></i>
              <span className="nav-item">Tasks</span>
            </Link>
          </li>
          <li>
          <Link to="" className="logouts">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Settings</span>
            </Link>
          </li>
          <li>
            <a href="">
              <i className="fas fa-question-circle"></i>
              <span className="nav-item">Help</span>
            </a>
          </li>
          <li>
            <Link to="/login" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </Link>
          </li>
        </ul>
      </nav>

      <section className="main">
        <div className="main-top">
        <h1>Welcome <b><span className='name-color'>{user}</span></b> </h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="main-skills">
          <div className="card">
            <i className="fas fa-laptop-code"></i>
            <h3>Application Status</h3>
            
            <button className='dashbut'>View Details</button>
          </div>
          <div className="card">
            <i className="fab fa-wordpress"></i>
            <h3>Document Details</h3>
            
            <button className='dashbut'>View Details</button>
          </div>
          <div className="card">
            <i className="fas fa-palette"></i>
            <h3>Payment Info
              
            </h3>
           
            <button className='dashbut'>View Details</button>
          </div>
          <div className="card">
            <i className="fab fa-app-store-ios"></i>
            <h3>Academics</h3>
            
            <button className='dashbut'>View Details</button>
          </div>
        </div>

        <section className="main-course">
          <h1>My courses</h1>
          <div className="course-box">
            <ul>
              <li className="active">In progress</li>
              
            </ul>
            <div className="course">
              <div className="box">
                <h3>React.js</h3>
                <p>80% - progress</p>
                <button>continue</button>
                <i className="fab fa-html5 html"></i>
              </div>
              <div className="box">
                <h3>REST API</h3>
                <p>50% - progress</p>
                <button>continue</button>
                <i className="fab fa-css3-alt css"></i>
              </div>
              <div className="box">
                <h3>AWS</h3>
                <p>30% - progress</p>
                <button>continue</button>
                <i className="fab fa-js-square js"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
