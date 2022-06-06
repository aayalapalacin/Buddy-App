import React, { useEffect, useState } from "react";
import useStore from "../store/zustand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonArrowUpFromLine,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UserInput } from "./UserInput";
import { UserGoalProfile } from "./UserGoalProfile";

function Goal(props) {
  const actions = useStore((state) => state.actions);
  const [boolean, setBoolean] = useState(props.isChecked);

  const todoItemChecked = (event) => {
    setBoolean(!boolean);
    console.log("props goal id", props.goalId);
    event.preventDefault();
    event.persist();
    // if (event.target.checked == true) {
    // }
    console.log("event target checked", event.target.checked);
    actions.changeGoal(!boolean, props.goalId);
  };

  return (
    <div id="checklist" className="checklistPadding">
      <input
        key={props.key}
        type="checkbox"
        label={props.goal_name}
        name="r"
        value="1"
        className="border border-primary rounded-circle"
        checked={boolean}
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
  const user = useStore((state) => state.user);

  let info = useStore((state) => state.selectedCategories);
  console.log("info", info);

  const actions = useStore((state) => state.actions);

  const [selectedCategories, setSelectedCategories] = useState(info);
  console.log("selectedCat!!!!!!!!!!!", selectedCategories);
  // let selectedCategories = [{ task: "task1" }, { task: "task2" }];
  const [checkedTodo, setCheckedTodo] = useState([]);

  // (() => {
  //   actions.getSelectedCategories(user.id).then();
  // }, []);

  return (
    <div className="container-fluid ">
      <div className="row categoryRow">
        <nav>
          <div
            className="shadow-longer nav nav-tabs "
            id="nav-tab"
            role="tablist"
          >
            {selectedCategories.length > 0 &&
              selectedCategories.map((item, index) => {
                return (
                  <button
                    className={index == 0 ? "nav-link active" : "nav-link"}
                    key={index}
                    id={`nav-${item.task}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#nav-${item.task}`}
                    type="button"
                    role="tab"
                    aria-controls={`nav-${item.task}`}
                    aria-selected={index == 0 ? "true" : "false"}
                  >
                    {item.task}
                  </button>
                );
              })}
          </div>
        </nav>
      </div>
      <div className="row rowMiddle">
        <div className="col-5 goalTaskCol">
          <div className="tab-content" id="nav-tabContent">
            {selectedCategories.length > 0 &&
              selectedCategories.map((item, index) => {
                return (
                  <div
                    className={
                      index == 0 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    key={index}
                    id={`nav-${item.task}`}
                    role="tabpanel"
                    aria-labelledby={`nav-${item.task}-tab`}
                  >
                    {item.goals.map((goal, goalIndex) => {
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
        <div className="col-7 findBtnCol">
          <button
            id="buddyBtn"
            className="raise"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <h5 id="findBuddy">Find a Buddy</h5>
            <FontAwesomeIcon
              className="dashBuddyIcon"
              icon={faUserGroup}
            ></FontAwesomeIcon>
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="modal-title"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title font" id="modal-title">
                    We have the same goals as you!!
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <UserGoalProfile />
                  <UserGoalProfile />
                  <UserGoalProfile />
                  <UserGoalProfile />
                  <UserGoalProfile />
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
          <div className="box box2 instructionsDashboard">
            <div className="evenboxinner font instructionDivDash ">
              <p className="dashBoxText">1. Select Your Goals</p>
              <p className="dashBoxText">
                2. Make todo list to track your progress
              </p>
              <p className="dashBoxText">3. Find a buddy, Complete Goals </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row todoListRow">
        <div className="col-12">
          <h1 className="font todoListTitle">{user.username}'s Todo List</h1>
          <UserInput />
        </div>
      </div>
    </div>
  );
}

export default DashboardTask;
