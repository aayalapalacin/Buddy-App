import React, { useEffect, useState, useContext } from "react";
import "./dragDrop.css";
import { useDrop } from "react-dnd";
import Task from "./task.jsx";
import SelectedTask from "./selectedTask.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Context from "../../store/appContext.js";
import useStore from "../../store/zustand.js";

import dragAndDropIcon from "../../../img/icons8-drag-and-drop-50.png";

// const TASKS = [
//   {
//     id: 1,
//     task: "Blah",
//     img: dragAndDropIcon,
//   },
//   { id: 2, task: "School", img: dragAndDropIcon },
//   { id: 3, task: "Creative", img: dragAndDropIcon },
//   { id: 4, task: "Professional", img: dragAndDropIcon },

// ];
const DayBtn = () => {
  // const { store, actions } = useContext(Context);
  const actions = useStore((state) => state.actions);
  const categoriesInfo = useStore((state) => state.categories);
  const user = useStore((state) => state.user);

  const todos = useStore((state) => state.todos);
  // const selectedCategories = useStore((state) => state.selectedCategories);
  console.log("todos", todos);
  const [categories, setCategories] = useState([]);
  const [dayButton, setDayButton] = useState([]);
  const [userSelectedCategories, setUserSelectedCategories] = useState("");

  const [item, setItem] = useState("");
  // const [taskArray, setTaskArray] = useState(TASKS);
  console.log("day btn", dayButton);
  useEffect(() => {
    actions.selectedCategories(dayButton);
  }, [dayButton]);
  useEffect(() => {
    actions.getCategories();
  }, []);
  useEffect(() => {
    setCategories(categoriesInfo);
  }, [categoriesInfo]);
  // useEffect(() => {
  //   let filteredArray = TASKS.filter((task) => {
  //     if (task.task == item) {
  //       return task;
  //     }
  //   });
  //   setTaskArray(filteredArray);
  // }, [item]);
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
  const addSelectedCategories = () => {
    dayButton.map((item) => {
      return item.task;
    });
  };
  // actions.addSelectedCategories(dayButton,user.id)

  // setUserSelectedCategories(item.task);

  console.log("fingers crossed", addSelectedCategories);

  return (
    <React.Fragment>
      <div className="row dayBtnRow">
        <div className="col-4 dropdownDiv">
          <div className="dayBtnDiv dropdown font">
            <Task
              className="btn btn-secondary dropdown-toggle font categoryBtn categoriesHover"
              element="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              task={item}
              defaultLabel="My Categories"
            />

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {categories.map((task) => (
                <Task
                  element="li"
                  className="dropdown-item font"
                  draggable
                  key={task.id}
                  id={task.id}
                  task={task.task}
                  goals={task.goals}
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
            <ul className="list-group list-group-flush font dropBtn">
              {dayButton.map((task, index) => (
                <SelectedTask
                  key={index}
                  task={task}
                  onChange={addSelectedCategories}
                />
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
