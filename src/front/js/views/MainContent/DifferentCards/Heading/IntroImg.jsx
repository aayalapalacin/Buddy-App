import React from "react";
import StockPhoto from "/workspace/Buddy-App/src/front/img/peoplelaughing.jpg";
import "./heading.css";
const IntroImg = () => {
  return (
    <>
      <div className="rightside">
        <img src={StockPhoto} className="stock-photo" />
      </div>
    </>
  );
};

export default IntroImg;
