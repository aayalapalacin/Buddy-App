import React, { useState } from "react";
import "../../styles/home.css";
import { useDrop } from "react-dnd";
import Task from "./task.jsx";

const TASKS = [
  { id: 1, name: "school work" },
  { id: 2, name: "Gym" },
  { id: 3, name: "Cleaning" },
  { id: 4, name: "Yoga" },
];

const DayBtn = () => {
  const [dayButton, setDayButton] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "task",
    drop: (item) => {
      if (dayButton.length == 0) {
        setDayButton([item]);
      } else if (dayButton.length > 0) {
        let list = dayButton.filter((taskItem) => {
          if (taskItem.name != item.name) {
            return taskItem;
          }
        });
        list = [...list, item];
        setDayButton(list);
      }
    },
    // !dayButton.includes(item) ? [...dayButton, item] : dayButton

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <React.Fragment>
      <div>
        {TASKS.map((task) => (
          <Task draggable id={task.id} name={task.name} />
        ))}
      </div>
      <div className="dayButton" ref={dropRef}>
        {dayButton.map((task) => (
          <Task id={task.id} name={task.name} />
        ))}
        {isOver && <div> Drop Here!</div>}
      </div>
    </React.Fragment>

    // // {/* <div className='pets'>
    // {PETS.map(pet => <PetCard draggable id={pet.id} name={pet.name} />)}
    // </div>
    // <div className='basket' ref={dropRef}>
    // {basket.map(pet => <PetCard id={pet.id} name={pet.name} />)}
    // {isOver && <div>Drop Here!</div>}
    // </div> */}
  );
};

export default DayBtn;
