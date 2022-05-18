import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./awards.css";
=======
import { faStar } from "@fortawesome/free-solid-svg-icons";   
import "./awards.css";                   
>>>>>>> e19f89acf1b7e91473a9e760864bee6116dac16e
const Awards = () => {
  return (
    <div>
      <div>
        <div className="award-container">
          <div className="award-opener">
            <div className="title-award">
              {/* <h1 className="awards-title">Awards</h1> */}
              <ul className="awards-table">
<<<<<<< HEAD
                <li>
                  <FontAwesomeIcon className="awards-icon" icon={faStar} />
                  Awarded Nobel Peace Prize
                </li>
                <li>
                  <FontAwesomeIcon className="awards-icon" icon={faStar} />
                  Second Award
                </li>
                <li>
                  <FontAwesomeIcon className="awards-icon" icon={faStar} />
                  Another Award
                </li>
=======
                <li><FontAwesomeIcon className="awards-icon" icon={faStar}/>Awarded Nobel Peace Prize</li>
                <li><FontAwesomeIcon className="awards-icon" icon={faStar}/>Second Award</li>
                <li><FontAwesomeIcon className="awards-icon" icon={faStar}/>Another Award</li>
>>>>>>> e19f89acf1b7e91473a9e760864bee6116dac16e
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
