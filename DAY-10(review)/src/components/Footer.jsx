import React from "react";
import { GoMail } from "react-icons/go";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import facebook from "../assets/img/facebook.png";
import instagrams from "../assets/img/instagrams.png";
import linkedin from "../assets/img/linkedin.png";
import logoalone from "../assets/img/logoalone.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
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
        <div className="haaris">
          <p>Developed by MOHAMED HAARIS</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
