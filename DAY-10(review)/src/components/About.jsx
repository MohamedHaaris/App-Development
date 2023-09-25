import React, { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import "../assets/css/About.css";
import aroma from "../assets/img/aroma.jpg";
import esblock from "../assets/img/esblock.jpg";
import facebook from "../assets/img/facebook.png";
import instagrams from "../assets/img/instagrams.png";
import linkedin from "../assets/img/linkedin.png";
import logo from "../assets/img/logo.png";
import logoalone from "../assets/img/logoalone.png";
import mission from "../assets/img/mission.jpg";
import skctimg from "../assets/img/skctimg.jpg";
import twitter from "../assets/img/twitter.png";
import vision from "../assets/img/vision.jpg";
import youtube from "../assets/img/youtube.png";

function About() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [color, setColor] = useState("white");

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

  // Sample data for boxes

  return (
    <div className="about-centered-container">
      <div className="about-background-container">
        <img width="100%" height="100%" src={esblock} />
        <div className="about-centered-text">
          <div className="about-modify">About SKCT</div>
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
              <Link to="/" style={{ color: color }} className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admission"
                style={{ color: color }}
                className="nav-links"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                style={{ color: color }}
                className="nav-links"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                style={{ color: color }}
                className="nav-links"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                style={{ color: color }}
                className="nav-links"
              >
                Admission
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="content">
          <div className="image">
            <img src={skctimg} alt="" />
          </div>
          <div className="about-text">
            <h2>Tale of SKCT</h2>
            <p>
              Nestled at the foothills of the Western Ghats, located in a
              sprawling 52-acre campus in Kovaipudur, Coimbatore, Sri Krishna
              College of Technology (SKCT) is a vibrant institute of higher
              education established in 1985 promoted by Sri Krishna
              Institutions. An extraordinary freedom of opportunity—to explore,
              to collaborate and to challenge oneself is the hallmark of the
              Institute. Being an autonomous institute, affiliated to Anna
              University, Chennai, and approved by AICTE, New Delhi, SKCT lays
              strong emphasis on collaborative research and stands apart from
              other institutes by its participatory work culture, student care
              programmes and high industry interaction.{" "}
            </p>
          </div>
        </div>

        <div className="content">
          <div className="about-text">
            <h2>SKCT</h2>
            <p>
              In a span of 38 years, it has emerged as one of the premier
              engineering colleges for learning, discovery and innovation due to
              the dynamic leadership of the Chairperson and Managing Trustee Smt
              S Malarvizhi. Being an acclaimed educationalist, she continues to
              contribute profusely for the glory and happiness of advancing
              generations. The college is accredited with A Grade by NAAC and
              eligible undergraduate programs are accredited by the National
              Board of Accreditation (NBA), New Delhi. The college offers 11
              undergraduate programmes and 6 postgraduate programmes in
              engineering, technology, and Management Studies.
            </p>
          </div>
          <div className="image">
            <img src={aroma} alt="" />
          </div>
        </div>
        <div className="content">
          <div className="image">
            <img src={mission} alt="" />
          </div>
          <div className="about-text">
            <h2>Vision</h2>
            <p>
              To be recognized as centre of excellence in science, engineering
              and technology through effective teaching and learning processes
              by providing a conducive learning environment.<label></label> To
              foster research and development with creative and entrepreneurial
              skills by means of innovative applications of technology.{" "}
              <label></label>Accomplish expectations of the society and industry
              by nurturing the students to be competent professionals with
              integrity.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="about-text">
            <h2>Mission</h2>
            <p>
              Sri Krishna College of Technology aspires to be recognized as one
              of the pioneers in imparting world class technical education
              through technology enabled innovative teaching learning processes
              with a focus on research activities to cater, to the societal
              needs.<label></label>
              To
              foster research and development with creative and entrepreneurial
              skills by means of innovative applications of technology.{" "}
              <label></label>Accomplish expectations of the society and industry
              by nurturing the students to be competent professionals with
              integrity.
            </p>
          </div>
          <div className="image">
            <img src={vision} alt="" />
          </div>
        </div>

        {/* Add more content sections here with alternating image and text */}
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
          <p className="terms">Privacy Policy</p>
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

export default About;
