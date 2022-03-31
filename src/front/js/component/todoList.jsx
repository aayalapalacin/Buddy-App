import React from "react";
import DayBtn from "./dayBtn.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
        <div className="readyButton"></div>
      </div>
    </div>
  );
}

export default TodoList;
