import React from "react";
import { Card } from "react-bootstrap";
import Topbar from "./navbar.jsx";
import Heading from "./DifferentCards/Heading/Heading.jsx";
import StockPhoto from "/workspace/Buddy-App/src/front/img/peoplelaughing.jpg";
import Awards from "./DifferentCards/Awards.jsx";
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
          <img src={StockPhoto} className="stock-photo" />
          <div className="contact-us">
            <Card border="info" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
