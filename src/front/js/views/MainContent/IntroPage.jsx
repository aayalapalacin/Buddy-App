import React from "react";
import { Card } from "react-bootstrap";
import Topbar from "./navbar.jsx";
import StockPhoto from "/workspace/Buddy-App/src/front/img/peoplelaughing.jpg";
import "./main-content.css";
const IntroPage = () => {
  return (
    <div>
      <Topbar />
      <div className="main-content">
        <div className="left-side">
          <div className="title-card">
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title><h1>Welcome to BuddyApp</h1></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            
          </div>
          <div className="awards">
            <Card border="info" style={{ width: "37rem" }}>
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
