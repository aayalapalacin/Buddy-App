import React from "react";

import "./heading.css";
const Heading = () => {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card border-info">
          <div class="card-body">
            <h1 class="card-title font homeHeader">Welcome to Buddy App</h1>
            <p class="card-text font homeParagraph">
              It's always easier to get the job done when someone is by your
              side
              <br /> Meet others who share the same goals as you!
            </p>
            <div className="readyButton">
              <a href="AccountApp" class="btn btn-dark-moon font homeBtn ">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
