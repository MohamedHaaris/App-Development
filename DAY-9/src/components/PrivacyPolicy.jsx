import React, { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import "../assets/css/PrivacyPolicy.css";
import facebook from "../assets/img/facebook.png";
import instagrams from "../assets/img/instagrams.png";
import linkedin from "../assets/img/linkedin.png";
import logo from "../assets/img/logo.png";
import logoalone from "../assets/img/logoalone.png";
import terms from "../assets/img/terms.jpg";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";

function PrivacyPolicy() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [color,setColor]=useState("white");

  const handleScroll = () => {
    if (window.scrollY >= 200) {
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
    <div className="terms-centered-container">
      <div className="terms-background-container">
        <img width="100%" height="500px" src={terms} />
        <div className="terms-centered-text">
          <div className="terms-modify">Privacy Policy</div>
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
              <Link to="/admission" style={{color:color}} className="nav-links">
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
      <div className="terms-content">
        <div className="terms-heading">
          <h2>Privacy Policy</h2>
        </div>
        <p className="terms-para">
          We may collect personal information from you when you voluntarily
          provide it. This may include your name, email address, phone number,
          postal address, and other information you submit through forms on our
          website. We collect this data when you inquire about our academic
          programs, submit an application, or engage with our services. Usage
          Information When you visit our website, we automatically gather
          certain information about your visit. This may include your IP
          address, browser type, device information, and the pages you access on
          our site. We employ cookies and similar technologies to facilitate
          this data collection. You can adjust your cookie preferences through
          your browser settings.
        </p>
        <div className="terms-side">
          <h4>How We Use Your Information</h4>
        </div>
        <p className="terms-para">
          1. Providing Services We use your personal information to provide you
          with the information, services, and support you request. This includes
          processing applications, responding to inquiries, delivering
          educational content, and managing your interactions with SKCT.{" "}
          <label></label>2. Communication We may use the contact information you
          provide to communicate with you. This includes sending you important
          updates, event invitations, newsletters, and announcements related to
          SKCT. You can opt out of receiving these communications at any time.{" "}
          <label></label>3. Analytics and Improvement We analyze user data to
          enhance our website, services, and overall user experience. This
          analysis helps us understand how visitors interact with our content,
          enabling us to make informed improvements and updates.
        </p>
        <div className="terms-side">
          <h4>Data Security</h4>
        </div>
        <p className="terms-para">
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. Despite our best efforts, no method of data transmission
          over the internet or electronic storage is entirely secure, and we
          cannot guarantee absolute security.
        </p>
        <div className="terms-side">
          <h4>Data Sharing</h4>
        </div>
        <p className="terms-para">
          SKCT does not sell, trade, or rent your personal information to third
          parties. However, we may share your information with trusted service
          providers who assist us in delivering our services. These service
          providers are contractually obligated to protect your data and use it
          only for the purposes we specify.
        </p>
        <div className="terms-side">
          <h4>External Links</h4>
        </div>
        <p className="terms-para">
          Our website may contain links to external websites for your
          convenience. Please be aware that we have no control over the content
          or privacy practices of these third-party sites. We strongly encourage
          you to review the privacy policies of any linked websites you may
          choose to visit.
        </p>
        <div className="terms-side">
          <h4>Changes to Privacy Policy</h4>
        </div>
        <p className="terms-para">
          SKCT reserves the right to update this privacy policy at any time to
          reflect changes in data protection laws or our data handling
          practices. Any such changes will be prominently posted on our website,
          and the revised policy will apply to data collected after the
          effective date of the changes.
        </p>
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

export default PrivacyPolicy;
