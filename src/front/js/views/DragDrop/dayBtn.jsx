import React, { useEffect, useState } from "react";
import "./dragDrop.css";
import { useDrop } from "react-dnd";
import Task from "./task.jsx";
import SelectedTask from "./selectedTask.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const TASKS = [
  {
    id: 1,
    task: "My Goal",
  },
  { id: 2, task: "School" },
  { id: 3, task: "Creative" },
  { id: 4, task: "Professional" },
  { id: 5, task: "Health" },
];

const DayBtn = () => {
  const [dayButton, setDayButton] = useState([]);
  const [item, setItem] = useState("My Goal");
  const [taskArray, setTaskArray] = useState(TASKS);
  useEffect(() => {
    let filteredArray = TASKS.filter((task) => {
      if (task.task == item) {
        return task;
      }
    });
    setTaskArray(filteredArray);
  }, [item]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "task",
    drop: (item) => {
      if (dayButton.length == 0) {
        setDayButton([item]);
      } else if (dayButton.length > 0) {
        let list = dayButton.filter((taskItem) => {
          if (taskItem.task != item.task) {
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
          <select
            onChange={(e) => {
              setItem(e.target.value);
            }}
          >
            {TASKS.map((item) => {
              return <option value={item.task}> {item.task}</option>;
            })}
          </select>
          <div className="dayBtnDiv dropdown">
            <Task
              className="btn btn-secondary dropdown-toggle"
              element="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              task={item}
              defaultLabel="select"
            />

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {TASKS.map((task) => (
                <Task
                  element="li"
                  className="dropdown-item taskBtn"
                  draggable
                  key={task.id}
                  task={task}
                  func={() => setItem(task)}
                />
              ))}
            </ul>
          </div>
          <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
        </div>
        <div className="col-6 dayBtnCol">
          <div className="dayButton" ref={dropRef}>
            <ul className="list-group list-group-flush">
              {dayButton.map((task) => (
                <SelectedTask key={task.id} task={task.task} />
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
