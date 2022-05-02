import React, { useEffect, useState } from "react";
import useStore from "../store/zustand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { UserInput } from "./UserInput";

function Goal(props) {
  const todoItemChecked = (event) => {
    console.log("props goal id", props.goalId);
    event.preventDefault();
    event.persist();
    if (event.target.checked == true) {
    }
    console.log("event", event);
  };

  return (
    <div id="checklist" className="checklistPadding">
      <input
        key={props.key}
        type="checkbox"
        name="r"
        value="1"
        className="border border-primary rounded-circle"
        // checked={goal.is_done}
        onChange={todoItemChecked}
      />
      <label htmlFor="01">{props.goal_name}</label>
    </div>
  );
}

function DashboardTask() {
  // const getGoals = useStore((state) => state.goals);
  // const [goals, setGoals] = useState([]);

  // const [categories,setCategories]=useState();
  let selectedCategories = useStore((state) => state.selectedCategories);
  console.log("selectedCat", selectedCategories);
  // let selectedCategories = [{ task: "task1" }, { task: "task2" }];
  const [checkedTodo, setCheckedTodo] = useState([]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
    }
  }, [selectedCategories]);

  return (

    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {selectedCategories.map((item, index) => {
            return (
              <button
                className={index == 0 ? "nav-link active" : "nav-link"}
                key={index}
                id={`nav-${item.task.task}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-${item.task.task}`}
                type="button"
                role="tab"
                aria-controls={`nav-${item.task.task}`}
                aria-selected={index == 0 ? "true" : "false"}
              >
                {item.task.task}
              </button>
            );
          })}

    <div className="container-fluid">
      <div className="row">
        <nav>
          <div
            className="shadow-longer nav nav-tabs"
            id="nav-tab"
            role="tablist"
          >
            {selectedCategories.map((item, index) => {
              return (
                <button
                  className={index == 0 ? "nav-link active" : "nav-link"}
                  key={index}
                  id={`nav-${item.task.task}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${item.task.task}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${item.task.task}`}
                  aria-selected={index == 0 ? "true" : "false"}
                >
                  {item.task.task}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="tab-content" id="nav-tabContent">
            {selectedCategories.map((item, index) => {
              return (
                <div
                  className={
                    index == 0 ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  key={index}
                  id={`nav-${item.task.task}`}
                  role="tabpanel"
                  aria-labelledby={`nav-${item.task.task}-tab`}
                >
                  {item.task.goals.map((goal, goalIndex) => {
                    return (
                      <Goal
                        key={goalIndex}
                        goal_name={goal.goal_name}
                        isChecked={goal.is_done}
                        goalId={goal.id}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-7">
          <button id="buddyBtn" className="raise">
            <h5>Find a Buddy</h5>
            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <UserInput />

        </div>
        <div className="col-6"> User Progress</div>
      </div>
    </div>
  );
}

export default DashboardTask;
