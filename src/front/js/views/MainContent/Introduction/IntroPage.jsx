import React from "react";

import Topbar from "../Navbar/navbar.jsx";
import Heading from "../DifferentCards/Heading/Heading.jsx";
import ContactUs from "../DifferentCards/Contact/ContactUs.jsx";
import Awards from "../DifferentCards/Awards/Awards.jsx";
import IntroImg from "../DifferentCards/Heading/IntroImg.jsx";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main-content.css";
const IntroPage = () => {
  return (
    <div>
      <Topbar />
      <div className="main-content">
        <Container>
          <Row>
            <Col>
              <div className="left-side">
                <Heading />
                <Awards />
              </div>
            </Col>
            <Col>
              <div className="right-side">
                <IntroImg />
                <ContactUs />
              </div>
            </Col>
          </Row>
        </Container>
      <footer className="footer">
        <h5>
          All rights and shit goes to us assholes here
        </h5>
      </footer>
      </div>
    </div>
  );
};

export default IntroPage;
