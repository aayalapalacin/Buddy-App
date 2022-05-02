import React from "react";
import { Link } from "react-router-dom";
import "./heading.css";
const Heading = () => {
  return (
    <div>
      <div className="head-container">
        <div className="site-opener">
          <div className="title-card">
            <h1 className="title">Welcome to BuddyApp!</h1>
          </div>
          <div className="card-dscrp">
            <h5>
              Have you ever wanted to connect with friends with likeminded
              interests?
              <br></br>
              <br></br>
              We can help you find out more about your dream achievements and
              goals with the our help so you can connect with others, with
              similar aspirations in mind.
            </h5>
          </div>
          <div>
            <h4>So if you feel like you're ready,</h4>
            <Link to="/AccountApp">
              <button className="intro-button" type="button">
                Sign up
              </button>
            </Link>
            <h4>Have an account?</h4>
            <Link to="/LoginPage">
              <button className="intro-button2" type="button">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
