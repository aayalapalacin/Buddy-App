import React from "react";
import "./awards.css";                   
const Awards = () => {
  return (
    <div>
      <div>
        <div className="award-container">
          <div className="award-opener">
            <div className="title-award">
              <h1>Awards</h1>
              <ul className="awards-table">
                <li>Awarded Nobel Peace Prize</li>
                <li>Second Award</li>
                <li>Another Award</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
