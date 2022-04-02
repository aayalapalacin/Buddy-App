import React from "react";
import "../../styles/home.css";
import { useDrag } from "react-dnd";

const Task = ({ id, name }) => {
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
    </div>
  );
};

export default Task;
