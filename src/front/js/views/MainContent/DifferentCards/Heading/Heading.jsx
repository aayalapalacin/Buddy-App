import React from "react";
import StockPhoto from "/workspace/Buddy-App/src/front/img/peoplelaughing.jpg";
import "./heading.css"
const Heading = () => {
  return (
    <div>
      <div className="head-container">
        <div className="site-opener">
          <div className="title-card">
            <h1>Welcome to BuddyApp</h1>
          </div>
          <div className="rightside">
          <img src={StockPhoto} className="stock-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
