import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import logo from '../assets/img/logo.png';
import skctvideo from '../assets/img/skctvideo.mp4';
import { selectUser } from '../redux/userSlice';

const Home = () => {
  const user=useSelector(selectUser);
  const [navbarSticky, setNavbarSticky] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      
      <nav className={`navbar ${navbarSticky ? 'sticky' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Admission</Link>
          </li>
        </ul>
      </nav>

      {/* Video Container */}
      <div className="image-containers">
        <video width="100%" height="100%" src={skctvideo} autoPlay loop muted>
        </video>
      <div className="image-containers-logo">
          <img width="300px" height="120px" src={logo} alt="" />
        </div>
      </div>
      
    </>
  );
};

export default Home;
