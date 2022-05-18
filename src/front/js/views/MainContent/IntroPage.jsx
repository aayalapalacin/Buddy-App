import React from "react";

import Heading from "./DifferentCards/Heading/Heading.jsx";
import ContactUs from "./DifferentCards/Contact/ContactUs.jsx";
import Awards from "./DifferentCards/Awards/Awards.jsx";
import IntroImg from "./DifferentCards/Heading/IntroImg.jsx";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main-content.css";
const IntroPage = () => {
  return (
    <div>
      <div className="main-content">
        <Heading />
        <div className="secondhalf">
          <Awards />
          <ContactUs />
        </div>
        <footer className="footer">
<<<<<<< HEAD
          <h5 className="footerRightsTxt">All rights go to BuddyApp</h5>
=======
          <h5>All rights and shit goes to us assholes here</h5>
>>>>>>> e19f89acf1b7e91473a9e760864bee6116dac16e
        </footer>
      </div>
    </div>
  );
};

export default IntroPage;
