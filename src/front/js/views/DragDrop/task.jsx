import React, { useState } from "react";
import "./dragDrop.css";
import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Task = ({ id, task, task1, task2, task3, task4 }) => {
  const [taskItem, setTaskItem] = useState("");
  const [newTaskItem, setNewTaskItem] = useState([]);

  const addTask = (event) => {
    if (event) {
      const addedTaskItem = [...newTaskItem, taskitem];
      setNewTaskItem(addedTaskItem);
    }
  };
  const [{ isDragging }, dragRef] = useDrag({
    type: "task",
    item: { id, task, task1, task2, task3, task4 },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-info taskBtn dropdown-toggle"
        ref={dragRef}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {task}
        {isDragging && ""}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            {task1}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {task2}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {task3}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {task4}
          </a>
        </li>
      </ul>

      <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
    </div>
  );
};

export default Task;
