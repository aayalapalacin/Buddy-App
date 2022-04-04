import React from "react";
import "../../styles/home.css";
import { useDrag } from "react-dnd";

const SelectedTask = ({ id, name }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "task",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <li className="list-group-item taskItemColor" ref={dragRef}>
      {name}
      {isDragging && ""}
    </li>
  );
};

export default SelectedTask;
