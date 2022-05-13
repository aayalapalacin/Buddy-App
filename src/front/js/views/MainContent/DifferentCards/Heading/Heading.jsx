import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "/workspace/Buddy-App/src/front/js/views/MainContent/DifferentCards/Heading/IntroImg.jsx";
import "./heading.css";
const Heading = () => {
  return (
    <div>
      <div className="head-container">
        <div className="site-opener">
          <div className="title-card">
            <h2 className="title">
              <strong>Connect, Grow, and Accomplish</strong>
            </h2>
            <h1 className="title">We're here to help</h1>
          </div>
          <IntroImg />
          <div className="card-dscrp">
            <br></br>
            <br></br>
            <h5 className="have-you">
              Have you ever wanted to connect with friends with likeminded
              interests?
              <br></br>
              <br></br>
              We can help you find out more about your dream achievements and
              goals with the our help so you can connect with others, with
              similar aspirations in mind.
            </h5>
            <br></br>
            <br></br>
          </div>
          <div>
            <div className="login-info">
              <h4>So, if you feel like you're ready,</h4>
              <Link to="/AccountApp">
                <button className="intro-button" type="button">
                  Let's get started
                </button>
              </Link>
              {/* <h4>Have an account?</h4>
              <Link to="/LoginPage">
                <button className="intro-button2" type="button">
                  Sign in
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
