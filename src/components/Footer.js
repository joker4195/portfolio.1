import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Plot NO.13 Shivaji Nagar.</p>
              <p>Chandrapur, Maharasthra. </p>
              <p>442401.</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <h4>+91-7887627220 </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <p>kushalgaddamwar121@gmail.com</p>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            Myself Kushal Gaddamwar, I am currently a B-Tech Computer Science
            student in IIIT Jabalpur and I am intrested in making new Projects.
          </p>

          <div className="social ">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
