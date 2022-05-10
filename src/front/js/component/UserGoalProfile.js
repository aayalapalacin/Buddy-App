import React from "react";
import buddyImg from "../../img/buddyapp2.png";

export const UserGoalProfile = () => {
  return (
    <div className="fullCard">
      <img
        src={buddyImg}
        id="userGoalPic"
        className="CharacterCard-img-top"
        alt="..."
      />
      <div className="CharacterCard-body">
        <h5 className="Card-title">Username</h5>
        <p className="Card-text">Inspiration: My grandather</p>
        <p className="Card-text">Fun Fact: I like to play music in the dark </p>
        <p className="Card-text">User Progress: 25% </p>
      </div>
    </div>
  );
};
