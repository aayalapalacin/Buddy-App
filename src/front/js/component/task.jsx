import React from "react";
import "../../styles/home.css";
import { useDrag } from "react-dnd";

// export const PetCard = ({ id, name }) => {
//   const [{ isDragging }, dragRef] = useDrag({
//     type: "pet",
//     item: { id, name },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });
//   return (
//     <div className="pet-card" ref={dragRef}>
//       {name}
//       {isDragging && "😱"}
//     </div>
//   );
// };

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
      <button type="button" class="btn btn-outline-info" ref={dragRef}>
        {name}
        {isDragging && "😱"}
      </button>
    </div>
  );
};

export default Task;
