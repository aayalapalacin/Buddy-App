import React, { useEffect, useState, useContext } from "react";
import "./dragDrop.css";
import { useDrop } from "react-dnd";
import Task from "./task.jsx";
import SelectedTask from "./selectedTask.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Context from "../../store/appContext.js";

import dragAndDropIcon from "../../../img/icons8-drag-and-drop-50.png";

const TASKS = [
  {
    id: 1,
    task: "Health",
    img: dragAndDropIcon,
  },
  { id: 2, task: "School", img: dragAndDropIcon },
  { id: 3, task: "Creative", img: dragAndDropIcon },
  { id: 4, task: "Professional", img: dragAndDropIcon },
];

const DayBtn = () => {
  // const { state } = useContext(Context);
  const [dayButton, setDayButton] = useState([]);
  const [item, setItem] = useState("");
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

  // console.log(state.categories);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4 dropdownDiv">
          <div className="dayBtnDiv dropdown font">
            <Task
              className="btn btn-secondary dropdown-toggle font"
              element="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              task={item}
              defaultLabel="My Goals"
            />

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {TASKS.map((task) => (
                <Task
                  element="li"
                  className="dropdown-item font"
                  draggable
                  key={task.id}
                  task={task}
                  func={() => setItem(task)}
                />
              ))}
            </ul>
          </div>
          {/* <FontAwesomeIcon
            icon={faCirclePlus}
            onClick={addedBtn}
          ></FontAwesomeIcon> */}
        </div>
        <div className="col-4 arrowRight">
          <FontAwesomeIcon
            className="arrowSize arrowRight"
            icon={faArrowRightLong}
          ></FontAwesomeIcon>
        </div>
        <div className="col-4 dayBtnCol">
          <div className="dayButton" ref={dropRef}>
            <ul className="list-group list-group-flush font">
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
