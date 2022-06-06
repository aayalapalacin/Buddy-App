import React from "react";
import buddyImg from "../../img/buddyapp2.png";

export const UserGoalProfile = (props) => {
  return (
    <div className="fullCard">
      <img
        src={buddyImg}
        id="userGoalPic"
        className="CharacterCard-img-top"
        alt="..."
      />
      <div className="CharacterCard-body">
        <h5 className="Card-title font">{props.username}</h5>
        <p className="Card-text font">{props.inspiration}</p>
        <p className="Card-text font">{props.fun_fact} </p>
        <p className="Card-text font">User Progress: 25% </p>
      </div>
    </div>
  );
};
