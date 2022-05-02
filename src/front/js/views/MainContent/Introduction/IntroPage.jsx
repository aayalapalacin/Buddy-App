import React from "react";
import Topbar from "../Navbar/navbar.jsx";
import Heading from "../DifferentCards/Heading/Heading.jsx";
import ContactUs from "../DifferentCards/Contact/ContactUs.jsx";
import Awards from "../DifferentCards/Awards/Awards.jsx";
import IntroImg from "../DifferentCards/Heading/IntroImg.jsx";
import "./main-content.css";

const IntroPage = () => {
  return (
    <div>
      <Topbar />
      <div className="main-content">
        <Heading />
        <div className="secondhalf">
          <Awards />
          <ContactUs />
        </div>
        <footer className="footer">
          <h5>All rights and shit goes to us assholes here</h5>
        </footer>
      </div>
    </div>
  );
};

export default IntroPage;
