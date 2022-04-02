import React, { useState } from "react";
import "../../styles/home.css";
import { useDrop } from "react-dnd";
import Task from "./task.jsx";

const TASKS = [
  { id: 1, name: "school work" },
  { id: 2, name: "Gym" },
  { id: 3, name: "Cleaning" },
  { id: 4, name: "Yoga" },
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
              <Task draggable key={task.id} name={task.name} />
            ))}
          </div>
        </div>
        <div className="col-6 dayBtnCol">
          <div className="dayButton" ref={dropRef}>
            {dayButton.map((task) => (
              <Task key={task.id} name={task.name} />
            ))}
            {isOver && <div> Drop Here!</div>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DayBtn;
