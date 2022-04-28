import React from "react";


import "./heading.css";
const Heading = () => {
  return (
    <div>
      <div className="head-container">
        <div className="site-opener">
          <div className="title-card">
            <h1>Welcome to BuddyApp</h1>
          </div>
          <div className="card-dscrp">
            <h5>Have you ever wanted to connect with friends with likeminded interests?
              <br></br>
              <br></br>
              We can help you find out more about your dream achievements and goals with the our help so you can connect with others, with similar aspirations in mind. 
            </h5>
            <h4>So if you feel like you're ready,</h4>
            <button>Sign up</button>
            <h4>Have an account?</h4>
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
