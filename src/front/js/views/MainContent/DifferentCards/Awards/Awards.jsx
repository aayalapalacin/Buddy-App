import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";   
import "./awards.css";                   
const Awards = () => {
  return (
    <div>
      <div>
        <div className="award-container">
          <div className="award-opener">
            <div className="title-award">
              {/* <h1 className="awards-title">Awards</h1> */}
              <ul className="awards-table">
                <li><FontAwesomeIcon className="awards-icon" icon={faStar}/>Awarded Nobel Peace Prize</li>
                <li><FontAwesomeIcon className="awards-icon" icon={faStar}/>Second Award</li>
                <li><FontAwesomeIcon className="awards-icon" icon={faStar}/>Another Award</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
