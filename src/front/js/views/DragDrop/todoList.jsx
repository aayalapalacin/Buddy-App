import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import DayBtn from "./dayBtn.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./dragDrop.css";

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
        <div className="col-4">
          <div id="photoSampleDiv">
            <img
              id="pieChart"
              src="https://thumbs.dreamstime.com/z/business-goals-concept-pie-chart-d-rendering-white-background-78510989.jpg"
              alt="pie chart"
            />
          </div>
        </div>
        <div className="col-4">
          <h5>1. Choose Your Goals</h5>
          <h5>2. Drag to Commit</h5>
          <h5>3. Click Ready to Start Your Journey!</h5>
        </div>
        <div className="col-4">
          <FontAwesomeIcon
            className="arrowDownLeft"
            icon={faArrowDownLong}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6 readyBtnCol">
          <div className="readyButton">
            <button type="button" class="btn btn-warning">
              Ready!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
