import React, { useEffect, useState } from "react";
import "./dragDrop.css";
import { useDrop } from "react-dnd";
import Task from "./task.jsx";
import SelectedTask from "./selectedTask.jsx";

const TASKS = [
  {
    id: 1,
    task: "My Goal",
    // task1: "School",
    // task2: "Health",
    // task3: "Creative",
    // task4: "Professional",
  },
  { id: 2, task: "School" },
  // {
  //   id: 2,
  //   task: "",
  //   task1: "School",
  //   task2: "Health",
  //   task3: "Creative",
  //   task4: "Professional",
  // },
  // {
  //   id: 3,
  //   task: "",
  //   task1: "School",
  //   task2: "Health",
  //   task3: "Creative",
  //   task4: "Professional",
  // },
  // {
  //   id: 4,
  //   task: "",
  //   task1: "School",
  //   task2: "Health",
  //   task3: "Creative",
  //   task4: "Professional",
  // },
];

const DayBtn = () => {
  const [dayButton, setDayButton] = useState([]);
  const [item, setItem] = useState("My Goal");
  const [taskArray, setTaskArray] = useState(TASKS);
  useEffect(() => {
    let filteredArray = TASKS.filter((task) => {
      if (task.task == item) {
        return task;
      }
    });
    setTaskArray(filteredArray);
  }, [item]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "task",
    drop: (item) => {
      if (dayButton.length == 0) {
        setDayButton([item]);
      } else if (dayButton.length > 0) {
        let list = dayButton.filter((taskItem) => {
          if (taskItem.task != item.task) {
            return taskItem;
          }
        });
        list = [...list, item];
        setDayButton(list);
      }
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <select
            onChange={(e) => {
              setItem(e.target.value);
            }}
          >
            {TASKS.map((item) => {
              return <option value={item.task}> {item.task}</option>;
            })}
          </select>
          <div className="dayBtnDiv">
            {taskArray.map((task) => (
              <Task
                draggable
                key={task.id}
                task={task.task}
                // task1={task.task1}
                // task2={task.task2}
                // task3={task.task3}
                // task4={task.task4}
              />
            ))}
          </div>
        </div>
        <div className="col-6 dayBtnCol">
          <div className="dayButton" ref={dropRef}>
            <ul className="list-group list-group-flush">
              {dayButton.map((task) => (
                <SelectedTask key={task.id} task={task.task} />
              ))}
            </ul>
            {isOver && <div> Drop Here!</div>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DayBtn;
