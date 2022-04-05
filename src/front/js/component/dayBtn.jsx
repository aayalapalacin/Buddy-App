import React, { useState } from "react";
import "../../styles/home.css";
import { useDrop } from "react-dnd";
import Task from "./task.jsx";
import SelectedTask from "./selectedTask.jsx";

const TASKS = [
  { id: 1, name: "school work", category1: "study", category2: "take notes" },
];

const DayBtn = () => {
  const [dayButton, setDayButton] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "task",
    drop: (item) => {
      if (dayButton.length == 0) {
        setDayButton([item]);
      } else if (dayButton.length > 0) {
        let list = dayButton.filter((taskItem) => {
          if (taskItem.name != item.name) {
            return taskItem;
          }
        });
        list = [...list, item];
        setDayButton(list);
      }
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <div className="dayBtnDiv">
            {TASKS.map((task) => (
              <Task
                draggable
                key={task.id}
                name={task.name}
                category1={task.category1}
                category2={task.category2}
              />
            ))}
          </div>
        </div>
        <div className="col-6 dayBtnCol">
          <div className="dayButton" ref={dropRef}>
            <ul className="list-group list-group-flush">
              {dayButton.map((task) => (
                <SelectedTask key={task.id} name={task.name} />
              ))}
            </ul>
            {isOver && <div> Drop Here!</div>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DayBtn;
