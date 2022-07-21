import React, { useEffect, useState } from "react";
import useStore from "../store/zustand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonArrowUpFromLine,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { UserInput } from "./UserInput";
import { UserGoalProfile } from "./UserGoalProfile";

export function Goal(props) {
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
  useEffect(() => {
    if (user.id == null) {
      actions.refresh();
    }
  }, []);

  useEffect(() => {
    setSelectedCategories(info);
    // setUniqueCategory(info);
    // setUniqueCategory([
    //   ...info.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
    // ]);
  }, [info]);
  console.log("uniqueCat", uniqueCategory);
  console.log("selectCat", selectedCategories);
  const user = useStore((state) => state.user);
  const buddy = useStore((state) => state.buddy);

  let info = useStore((state) => state.selectedCategories);
  console.log("info", info);

  console.log("user dash", user);
  const actions = useStore((state) => state.actions);

  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(info);
  // const [catArrayState, setcatArrayState] = useState([]);
  // let selectedCategories = [{ task: "task1" }, { task: "task2" }];
  // const [checkedTodo, setCheckedTodo] = useState([]);
  const [userCategory, setUserCategory] = useState("");
  useEffect(() => {
    if (userCategory == "") {
      actions.getBuddy(info[0]?.id);
    } else if (userCategory === "School") {
      actions.getBuddy(1);
    } else if (userCategory === "Professional") {
      actions.getBuddy(2);
    } else if (userCategory === "Creative") {
      actions.getBuddy(3);
    } else if (userCategory === "Health") {
      actions.getBuddy(4);
    }
  }, [userCategory, info]);
  // (() => {
  //   actions.getSelectedCategories(user.id).then();
  // }, []);
  console.log("userCat buddy", userCategory);

  // const singleTab = () => {
  //   selectedCategories.map((item, index) => {
  //     let list = selectedCategories.filter((taskItem) => {
  //       if (taskItem != item.task) {
  //         return taskItem;
  //       }
  //     });
  //     console.log("list", list);
  //   });
  // };

  // const filtered = selectedCategories.filter((o.task, index) => !tasks.includes(id, index + 1))

  // console.log(filtered)

  function username_todo() {
    const username = user.username;
    return username;
  }

  console.log("username todo", username_todo());

  return (
    <div className="container-fluid ">
      <div className="row categoryRow">
        <nav>
          <div
            className="shadow-longer nav nav-tabs "
            id="nav-tab"
            role="tablist"
          >
            {info.length > 0 &&
              info.map((item, index) => {
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
                    onClick={() => setUserCategory(item.task)}
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
            {info.length > 0 &&
              info.map((item, index) => {
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
                  {buddy.map((item, index) => {
                    return (
                      <UserGoalProfile
                        key={index}
                        username={item.username}
                        inspiration={item.inspiration}
                        fun_fact={item.fun_fact}
                      />
                    );
                  })}
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
          <h1 className="font todoListTitle">{username_todo()} 's Todo List</h1>
          <UserInput />
        </div>
      </div>
    </div>
  );
}

export default DashboardTask;
