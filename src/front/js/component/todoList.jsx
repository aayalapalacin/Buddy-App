import React from "react";
import DayBtn from "./dayBtn";
import Task from "./task";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function TodoList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <DndProvider backend={HTML5Backend}>
            <Task />
          </DndProvider>
        </div>
        <div className="col-8">
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
