import React from "react";
import "./dragDrop.css";
import { useDrag } from "react-dnd";

const SelectedTask = ({ id, task }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "task",
    item: { id, task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <li className="list-group-item taskItemColor" ref={dragRef}>
      {task.task}
      {isDragging && ""}
    </li>
  );
};
export default SelectedTask;
