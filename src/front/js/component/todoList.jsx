import React from "react";

import DayBtn from "./dayBtn.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "react-router-dom";

function TodoList() {
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

  return (
    <div>
      ``
      <h1>This is the todoList</h1>
      <Link to="/">
        <button type="submit" value="Go Back"></button>
      </Link>
    </div>
  );
}

export default TodoList;
