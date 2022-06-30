import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import DayBtn from "./dayBtn.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./dragDrop.css";
import sucess from "../../../img/sucess.png";
import { Link } from "react-router-dom";
import useStore from "../../store/zustand.js";

// import useStore from "../store/zustand.js";
// const actions = useStore((state) => state.actions);
// const actions = useStore((state) => state.actions);

const TodoList = () => {
  // const getTodos = () => {
  //   actions.getSelectedCategories(user.id);
  // };
  return (
    <div className="container-fluid">
      <div className="row dayBtnRow1">
        <div className="col-12">
          <DndProvider backend={HTML5Backend}>
            <DayBtn />
          </DndProvider>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div class="box box2 boxDrag">
            <div class="evenboxinner font">
              <h5 className=".categoriesHover">1. Choose Your Categories</h5>
              <h5>2. Drag to Commit Box</h5>
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
      <div className="row dayBtnRow1 ">
        <div className="col-6">
          <div id="photoSampleDiv">
            <img id="pieChart" src={sucess} alt="pie chart" />
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
