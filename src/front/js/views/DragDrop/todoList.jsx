import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import DayBtn from "./dayBtn.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./dragDrop.css";
import buddyImg from "../../../img/buddyapp2.png";
import { Link } from "react-router-dom";

const TodoList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <DndProvider backend={HTML5Backend}>
            <DayBtn />
          </DndProvider>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div class="box box2">
            <div class="evenboxinner">
              <h5>1. Choose Your Goals</h5>
              <h5>2. Drag to Commit</h5>
              <h5>3. Click Ready to Start Your Journey!</h5>
            </div>
          </div>
        </div>
        <div className="col-4 arrowDownCol">
          <FontAwesomeIcon
            className="arrowDownLeft arrowSize"
            icon={faArrowDownLong}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div id="photoSampleDiv">
            <img id="pieChart" src={buddyImg} alt="pie chart" />
          </div>
        </div>
        <div className="col-6 readyBtnCol font">
          <div className="readyButton font">
            <Link to="/dashboard">
              <button class="col btn btn-dark-moon">Ready!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
