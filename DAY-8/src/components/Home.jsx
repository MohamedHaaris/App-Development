import React, { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Home.css"; // Import your CSS file (assuming Home.css is the correct file)
import ai from "../assets/img/ai.png";
import civil from "../assets/img/civil.png";
import cs from "../assets/img/cs.png";
import ec from "../assets/img/ec.png";
import ee from "../assets/img/ee.png";
import facebook from "../assets/img/facebook.png";
import ins from "../assets/img/ins.png";
import instagrams from "../assets/img/instagrams.png";
import it from "../assets/img/it.png";
import line from "../assets/img/line.png";
import linkedin from "../assets/img/linkedin.png";
import logo from "../assets/img/logo.png";
import logoalone from "../assets/img/logoalone.png";
import mct from "../assets/img/mct.png";
import mech from "../assets/img/mech.png";
import pythonimg from "../assets/img/pythonimg.jpg";
import skctvid from "../assets/img/skctvid.mp4";
import twitter from "../assets/img/twitter.png";
import upcom from "../assets/img/upcom.png";
import youtube from "../assets/img/youtube.png";

function Home() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [color,setColor]=useState("white");

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setNavbarFixed(true);
      setColor("black");
    } else {
      setNavbarFixed(false);
      setColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [establishedCount, setEstablishedCount] = useState(0);
  const [acresCount, setAcresCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);

  const desiredEstablishedCount = 1985;
  const desiredAcresCount = 1000;
  const desiredStudentsCount = 4000;

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 30; // 30 milliseconds per step

    // Calculate the step for each counter
    const establishedStep = (desiredEstablishedCount / (duration / interval)) | 0;
    const acresStep = (desiredAcresCount / (duration / interval)) | 0;
    const studentsStep = (desiredStudentsCount / (duration / interval)) | 0;

    let establishedTimer;
    if (establishedCount < desiredEstablishedCount) {
      establishedTimer = setInterval(() => {
        setEstablishedCount((prevCount) => {
          const newCount = prevCount + establishedStep;
          return newCount >= desiredEstablishedCount
            ? desiredEstablishedCount
            : newCount;
        });
      }, interval);
    }

    let acresTimer;
    if (acresCount < desiredAcresCount) {
      acresTimer = setInterval(() => {
        setAcresCount((prevCount) => {
          const newCount = prevCount + acresStep;
          return newCount >= desiredAcresCount ? desiredAcresCount : newCount;
        });
      }, interval);
    }

    let studentsTimer;
    if (studentsCount < desiredStudentsCount) {
      studentsTimer = setInterval(() => {
        setStudentsCount((prevCount) => {
          const newCount = prevCount + studentsStep;
          return newCount >= desiredStudentsCount
            ? desiredStudentsCount
            : newCount;
        });
      }, interval);
    }

    return () => {
      clearInterval(establishedTimer);
      clearInterval(acresTimer);
      clearInterval(studentsTimer);
    };
  }, [desiredEstablishedCount, desiredAcresCount, desiredStudentsCount]);

  const counterStyle = {
    fontSize: "4rem",
    fontWeight: "bolder",
    color: "rgb(0, 123, 255)",
  };

  const navbarStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2.5rem",
    
  };

  const blueTextStyle = {
    color: "rgb(0, 123, 255)",
  };

  // Sample data for boxes
  const boxesData = [
    { id: 1, imageUrl: cs, text: "Computer Science And Engineering" },
    { id: 2, imageUrl: it, text: "Information Technology" },
    { id: 3, imageUrl: ai, text: "Artificial Intelligence and Data Science" },
    { id: 4, imageUrl: ee, text: "Electrical and Electronic Engineering" },
    { id: 5, imageUrl: ec, text: "Electrical and Communication Engineering" },
    { id: 6, imageUrl: ins, text: "Instrumentation and Control Engineering" },
    { id: 7, imageUrl: mech, text: "Mechatronics Engineering" },
    { id: 8, imageUrl: civil, text: "Civil Engineering" },
    { id: 9, imageUrl: mct, text: "Mechanical Engineering" },
  ];
  const eventsData = [
    {
      id: 1,
      image: pythonimg,
      title: "Python Workshop in Web Development",
      date: "23 SEP",
    },
    {
      id: 2,
      image: pythonimg,
      title: "Python Workshop in Web Development",
      date: "15 OCT",
    },
    {
      id: 3,
      image: pythonimg,
      title: "Python Workshop in Web Development",
      date: "20 OCT",
    },
  ];

  const navigate = useNavigate();

  const goToPrivacyPolicy = () => {
    navigate("/terms");
  };
  

  return (
    <div className="centered-container">
      <div className="background-container">
        <video src={skctvid} autoPlay loop muted className="background-video" />
        <div className="centered-text">
          <div className="modify">The place of your dreams starts here..!</div>
        </div>
      </div>
      <nav className={`navbar ${navbarFixed ? "fixed" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img width="350px" height="80px" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" style={{color:color}} className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" style={{color:color}} className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" style={{color:color}} className="nav-links">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" style={{color:color}} className="nav-links">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" style={{color:color}} className="nav-links">
                Admission
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="home-content">
        <p className="count">
          <span style={counterStyle}>{establishedCount}</span>
          <span style={blueTextStyle}>Established</span>{" "}
        </p>
        <p className="count">
          <span style={counterStyle}>{acresCount}+</span>
          <span style={blueTextStyle}>Offers Per year</span>{" "}
        </p>
        <p className="count">
          <span style={counterStyle}>{studentsCount}+</span>
          <span style={blueTextStyle}>Students</span>{" "}
        </p>
      </div>
      <div className="courses-offered">Courses Offered</div>
      <div className="box-container" style={{ backgroundImage: `url(${line})` }}>
        {boxesData.map((box) => (
          <div className="box" key={box.id}>
            <img src={box.imageUrl} alt={`Image ${box.id}`} />
            <h3>{box.text}</h3>
          </div>
        ))}
      </div>
      <div className="total-upcom">
        <div className="upcoming-design" style={{ backgroundImage: `url(${upcom})` }}>
          <div className="upcom-text"><h2 >Upcoming Events</h2></div>
          <div className="upcoming-events-container">
            {eventsData.map((event, index) => (
              <div
                className={`event ${index === 0 ? "current" : ""}`}
                key={event.id}
              >
                <img src={event.image} alt={`Event ${event.id}`} />
                <h2>{event.title}</h2>
                <h3 className="event-date">{event.date}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Our Institutions</h3>
            <ul className="footer-col">
              <li>Sri Krishna Institutions</li>
              <li>Sri Krishna Polytechnic College</li>
              <li>Sri Krishna College of Engineering and Technology</li>
              <li>Sri Krishna Arts and Science College</li>
              <li>Sri Krishna Adithya College of Arts and Science</li>
            </ul>
            <h3>AICTE</h3>
            <ul className="footer-col">
              <li>AICTE 1993-2005</li>
              <li>AICTE 2005-2012</li>
              <li>AICTE 2012-2019</li>
            </ul>
            <h3>NIRF</h3>
            <ul className="footer-col">
              <li>NIRF 2023 Overall</li>
              <li>NIRF 2023 Engineering</li>
              <li>NIRF 2023 Management</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Downloads</h3>
            <ul className="footer-col">
              <li>RTI Declaration</li>
              <li>SOP Document</li>
              <li>AQAR 2018-2019</li>
              <li>AQAR 2017-2018</li>
              <li>AQAR 2016-2017</li>
              <li>AQAR 2015-2016</li>
              <li>CAQAR 2019-2020</li>
              <li>AQAR 2020-2021</li>
              <li>ARIIA 2021</li>
              <li>ARIIA 2020</li>
              <li>ARIIA 2019</li>
              <li>Best Practise</li>
              <li>IIQA - Self Declaration</li>
              <li>Hostel Application</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Reports</h3>
            <ul className="footer-col">
              <li>AICTE Name change</li>
              <li>Rules and Regulations</li>
              <li>SKCT Organogram</li>
              <li>Strategic Plan and Deployment</li>
              <li>UGC Autonomous</li>
              <li>AICTE books Recommended-UG</li>
              <li>AICTE books Recommended-PG</li>
              <li>AICTE books Recommended-authors</li>
              <li>Institutional Distinctiveness</li>
              <li>UGC Undertaking</li>
              <li>Audited Financial Statements 2018-2020</li>
              <li>Service rules and norms</li>
              <li>Service rules and norms</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Prospectus</h3>
            <ul className="footer-col">
              <li>SKCT 2022-2023</li>
              <li>SKCT 2021-2022</li>
              <li>SKCT 2020-2021</li>
            </ul>
            <h3>Feedback</h3>
            <ul className="footer-col">
              <li>Student Feedback</li>
              <li>Faculty Feedback</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="full-contact">
        <div className="contact-us">
          <img width="150px" height="150px" src={logoalone} alt="/" />
        </div>
        <div className="clg-address">
          <h2>SRI KRISHNA COLLEGE OF TECHNOLOGY</h2>
          <p>Kovaipudur, Coimbatore-641042</p>
        </div>
        <div className="contact-whole">
          <div className="contact">
            <LiaPhoneVolumeSolid className="footer-icons" />
            <p>+91 0422-2984567</p>
          </div>
          <div className="contact">
            <LiaPhoneVolumeSolid className="footer-icons" />{" "}
            <p>+91 0422-2984568</p>
          </div>
          <div className="contact">
            <GoMail className="footer-icons" /> <p> info@skct.edu.in</p>
          </div>
        </div>
        <div className="footer-logos">
          <img width="50px" height="50px" src={linkedin} alt="/" />
          <img width="50px" height="50px" src={instagrams} alt="/" />
          <img width="50px" height="50px" src={facebook} alt="/" />
          <img width="50px" height="50px" src={twitter} alt="/" />
          <img width="50px" height="50px" src={youtube} alt="/" />
        </div>
      </div>
      <div className="full-privacy">
        <div className="privacy">
          <p>Terms of Use</p>
          <p className="terms" onClick={goToPrivacyPolicy}>
            Privacy Policy
          </p>
        </div>
        <div className="copyrights">
          <p>All Rights Reserved @SKCT</p>
        </div>
        <div className="haaaris">
          <p>Developed by MOHAMED HAARIS</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
