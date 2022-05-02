import React from "react";
import StockPhoto from "/workspace/Buddy-App/src/front/img/peoplelaughing.jpg";
import Carousel from "react-bootstrap/Carousel";
import StockPhoto2 from "/workspace/Buddy-App/src/front/img/gals.jpg";
import StockPhoto3 from "/workspace/Buddy-App/src/front/img/bunchadudes.jpg";
import "./heading.css";
const IntroImg = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={StockPhoto} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={StockPhoto2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={StockPhoto3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {/* <div className="rightside">
        <img src={StockPhoto} className="stock-photo" />
      </div> */}
    </>
  );
};

export default IntroImg;
