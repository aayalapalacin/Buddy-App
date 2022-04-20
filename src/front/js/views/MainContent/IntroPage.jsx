import React from "react";

import Topbar from "./navbar.jsx";
import Heading from "./DifferentCards/Heading/Heading.jsx";
import ContactUs from "./DifferentCards/Contact/ContactUs.jsx";
import Awards from "./DifferentCards/Awards/Awards.jsx";
import "./main-content.css";
const IntroPage = () => {
  return (
    <div>
      <Topbar />
      <div className="main-content">
        <div className="left-side">
          <Heading />
          <Awards />
        </div>
        <div className="right-side">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
