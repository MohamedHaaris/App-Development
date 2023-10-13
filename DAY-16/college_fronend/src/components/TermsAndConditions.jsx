import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import facebook from "../assets/img/facebook.png";
import instagrams from "../assets/img/instagrams.png";
import linkedin from "../assets/img/linkedin.png";
import logoalone from "../assets/img/logoalone.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";
import logo from "../assets/img/logo.png";
import terms from "../assets/img/terms.jpg";
import "../assets/css/TermsAndConditions.css";

function TermsAndConditions() {
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
          <div className="terms-modify">Terms & Conditions</div>
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
          <h2>Terms & Conditions</h2>
        </div>
        <p className="terms-para">
          Welcome to the official website of SRI KRISHNA COLLEGE OF TECHNOLOGY.
          These Terms and Conditions govern your access to and use of our
          website, services, and any content provided herein. By accessing,
          browsing, or using our website and services, you acknowledge that you
          have read, understood, and agree to be bound by these Terms. If you do
          not agree to these Terms, please do not use our website or services.
          By accessing or using our website, you agree to comply with these
          Terms, our Privacy Policy, and any additional terms and conditions
          that may apply to specific services or features offered through our
          website. If you do not agree with any part of these Terms, please
          refrain from using our website and services.
        </p>
        <div className="terms-side">
          <h4>Website Use</h4>
        </div>
        <p className="terms-para">
          You may use our website for lawful and non-commercial purposes only.
          You agree not to:<label></label>
          1.Use our website in any way that may damage, disable, overburden, or
          impair its functionality. <label></label>
          2.Access or attempt to access any part of our website or content
          without authorization. Transmit, upload, or distribute any viruses,
          malware, or other harmful software.<label></label>
          3.Use our website to violate any applicable local, national, or
          international laws and regulations.<label></label> 4.Engage in any
          unauthorized collection, scraping, or harvesting of user data.
        </p>
        <div className="terms-side">
          <h4>User Accounts</h4>
        </div>
        <p className="terms-para">
          If you create an account on our website, you are responsible for
          maintaining the confidentiality of your account credentials and for
          all activities that occur under your account. You agree to notify us
          immediately of any unauthorized access or use of your account. By
          submitting content to our website, such as comments, reviews, or other
          user-generated content, you grant SKCT a non-exclusive, worldwide,
          royalty-free license to use, reproduce, modify, publish, and display
          that content in connection with our website and services. Our website
          may contain links to third-party websites. These links are provided
          for your convenience, and SKCT does not endorse, control, or assume
          responsibility for the content, products, or services offered by third
          parties. Your use of linked websites is subject to their terms and
          conditions.
        </p>
        <div className="terms-side">
          <h4>Disclaimer</h4>
        </div>
        <p className="terms-para">
          a. Accuracy of Information: While we strive to provide accurate and
          up-to-date information, we do not warrant or guarantee the accuracy,
          completeness, or reliability of any content on our website.
          Information provided on our website is for general informational
          purposes only and should not be considered professional advice.{" "}
          <label></label>
          b. Availability: SKCT may, at its discretion, temporarily or
          permanently suspend or discontinue its website or services without
          prior notice. We are not liable for any inconvenience, loss, or damage
          resulting from such actions.<label></label> c. Limitation of
          Liability: To the fullest extent permitted by applicable law, SKCT and
          its officers, directors, employees, agents, and affiliates shall not
          be liable for any direct, indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, arising from your
          use of our website or services.
        </p>
        <div className="terms-side">
          <h4>Governing and Changes to terms</h4>
        </div>
        <p className="terms-para">
          These Terms are governed by and construed in accordance with the laws
          of [Your Jurisdiction]. Any disputes arising from or relating to these
          Terms shall be subject to the exclusive jurisdiction of the courts in
          [Your Jurisdiction]. **10. Changes to Terms SKCT reserves the right to
          modify, update, or revise these Terms at any time. Any changes will be
          effective immediately upon posting on our website. Your continued use
          of our website and services after the posting of revised Terms
          constitutes your acceptance of the changes.
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

export default TermsAndConditions;
