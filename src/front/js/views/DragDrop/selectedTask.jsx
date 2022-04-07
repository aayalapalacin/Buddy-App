import React from "react";
import "./dragDrop.css";
import { useDrag } from "react-dnd";

const SelectedTask = ({ id, task, task1, task2, task3, task4 }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "task",
    item: { id, task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <li className="list-group-item taskItemColor" ref={dragRef}>
      {task}
      {isDragging && ""}
    </li>
  );
};
export default SelectedTask;
