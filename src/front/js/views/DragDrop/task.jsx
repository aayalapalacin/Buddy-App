import React, { useState } from "react";
import "./dragDrop.css";
import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

const Task = ({ id, task, func, element, defaultLabel, ...rest }) => {
  const [newTaskItem, setNewTaskItem] = useState([]);

  const addTask = (event) => {
    if (event) {
      const addedTaskItem = [...newTaskItem, taskitem];
      setNewTaskItem(addedTaskItem);
    }
  };

  const Elm = element;
  const [{ isDragging }, dragRef] = useDrag({
    type: "task",
    item: { id, task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Elm
      {...rest}
      ref={dragRef}
      onClick={() => func()}
      // data-bs-toggle="dropdown"
      // aria-expanded="false"
    >
      {task.task || defaultLabel}
      {!!task.img ? <img id="gripIcon" src={task.img} /> : null}

      {/* {isDragging && "Drag"} */}
    </Elm>
  );
};
export default Task;
