import React from "react";
import StockPhoto3 from "/workspace/Buddy-App/src/front/img/headingimg.jpg";
import "./heading.css";
const IntroImg = () => {
  return (
    <>
      <div className="rightside">
        <img src={StockPhoto3} className="stock-photo" />
      </div>
    </>
  );
};

export default IntroImg;
