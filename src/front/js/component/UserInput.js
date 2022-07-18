import React, { useState, useEffect } from "react";
import "../views/DragDrop/dragDrop.css";
import { CircleProgress } from "react-gradient-progress";
import useStore from "../store/zustand.js";

export const UserInput = () => {
  const todos = useStore((state) => state.todos);
  const user = useStore((state) => state.user);
  const actions = useStore((state) => state.actions);
  const [listItem, setListItem] = useState("");
  const [variable, setVariable] = useState(todos);
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    setVariable(todos);
  }, [todos]);
  console.log(listItem);
  const todoItem = (event) => {
    if (event.keyCode === 13) {
      actions.addTodos(listItem, user.id);
      // .then((data) => {
      //   let newTodoItem = [...variable, data];
      //   setVariable(newTodoItem);
      // });
      console.log("variable!!!!", variable);
      setListItem("");
    }
  };
  console.log("todos", todos);
  console.log("userState", user);
  console.log("variaable", variable);
  console.log("list item", listItem);
  // const todoItem = (event) => {
  //   if (event.keyCode === 13) {
  //     const newTodoItem = [...variable, listItem];
  //     setVariable(newTodoItem);
  //     setListItem("");
  //   }
  // };

  // const strikeThroughItem = () => {
  //   if (strikeStatus === false) {
  //     setStrikeStatus(true);
  //   } else {
  //     setStrikeStatus(false);
  //   }
  // };

  const todo = variable.map((item, index) => {
    // Return classes based on whether item is checked
    const isChecked = (label) =>
      checked.includes(label) ? "checked-item" : "not-checked-item";

    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    };
    console.log("todo", todo);
    console.log("list item", listItem);
    console.log("item label", item.label);
    return (
      <li className="list-group-item item " key={index}>
        <input
          name="cb"
          value={item.label}
          type="checkbox"
          id="cb"
          onChange={handleCheck}
        ></input>
        <p className={isChecked(item.label)}> {item.label}</p>

        <div
          className="mouseOver"
          onClick={() => {
            remove(index);
            actions.deleteTodos(item.id);
            actions.getTodos(user.user.id);
          }}
        >
          {" "}
          X{" "}
        </div>
      </li>
    );
  });

  const remove = (index) => {
    const removeItem = variable.filter((item, i) => i != index);
    setVariable(removeItem);
  };

  const calculateProgress = () => {
    let percentage = (checked.length / variable.length) * 100;
    if (isNaN(percentage)) {
      return null;
    } else {
      return Math.floor(percentage);
    }
    // return percentage;
    // console.log("percentage", percentage);
    // console.log("variable length", variable.length);
    // console.log("checked length", checked.length);
  };

  return (
    <div className="d-flex">
      <div>
        <div>
          <input
            type="text"
            className="item userInput font"
            onKeyDown={todoItem}
            value={listItem}
            onChange={(e) => setListItem(e.target.value)}
            placeholder="What needs to be done?"
          />
        </div>
        <div>
          <ul className="font" id="todoUL">
            {" "}
            {/* {todo} */}
            {todo}
          </ul>
        </div>
      </div>
      <div className="progressChart">
        {calculateProgress() == null ? (
          <CircleProgress
            className="progressChartCircle"
            percentage={0}
            strokeWidth={12}
            primaryColor={["#00ff2f", "#078dff"]}
            width={350}
            fontFamily={"Patrick Hand"}
            fontColor={"#618eff"}
            fontSize={"49px"}
          />
        ) : (
          <CircleProgress
            className="progressChartCircle"
            percentage={calculateProgress()}
            strokeWidth={12}
            primaryColor={["#00ff2f", "#078dff"]}
            width={350}
            fontFamily={"Patrick Hand"}
            fontColor={"#618eff"}
            fontSize={"49px"}
          />
        )}
      </div>
    </div>
  );
};
