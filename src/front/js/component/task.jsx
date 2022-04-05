import React, { useState } from "react";
import "../../styles/home.css";
import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Task = ({ id, name, category1, category2 }) => {
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
    item: { id, name, category1, category2 },
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
        {name}
        {isDragging && ""}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            {category1}
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            {category2}
          </a>
        </li>
      </ul>

      <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
    </div>
  );
};

{
  /* <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> */
}
export default Task;
