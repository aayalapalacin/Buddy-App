import React, { useState } from "react";
import "../../styles/home.css";
import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Task = ({ id, name }) => {
  const 
  const [{ isDragging }, dragRef] = useDrag({
    type: "task",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-info taskBtn"
        ref={dragRef}
      >
        {name}
        {isDragging && ""}
      </button>
      <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
    </div>
  );
};

export default Task;
