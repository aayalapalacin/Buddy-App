import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons";
import "../views/DragDrop/dragDrop.css";
import { CircleProgress } from "react-gradient-progress";

export const UserInput = () => {
  const [listItem, setListItem] = useState("");
  const [variable, setVariable] = useState([]);
  const [checked, setChecked] = useState([]);

  const todoItem = (event) => {
    if (event.keyCode === 13) {
      const newTodoItem = [...variable, listItem];
      setVariable(newTodoItem);
      setListItem("");
    }
  };

  // const strikeThroughItem = () => {
  //   if (strikeStatus === false) {
  //     setStrikeStatus(true);
  //   } else {
  //     setStrikeStatus(false);
  //   }
  // };

  const todo = variable.map((item, index) => {
    console.log("lenght", variable.length);
    // Return classes based on whether item is checked
    const isChecked = (item) =>
      checked.includes(item) ? "checked-item" : "not-checked-item";

    // const checkedItems = checked.length
    //   ? checked.reduce((total, item) => {
    //       console.log("total", total);
    //       console.log("item", item);
    //       console.log("checked", checked);
    //       console.log("checked.length", checked.length);
    //       return total + ", " + item;
    //     })
    //   : "";

    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    };
    return (
      <li className="list-group-item item " key={index}>
        {/* <button id="strikeBtn">
          <FontAwesomeIcon
            id="checkboxIcon"
            icon={faSquareCheck}
            // onClick={strikeThroughItem}
          ></FontAwesomeIcon>
        </button> */}
        <input
          name="cb"
          value={item}
          type="checkbox"
          id="cb"
          onChange={handleCheck}
        ></input>
        <p className={isChecked(item)}> {item}</p>

        <div className="mouseOver" onClick={() => remove(index)}>
          x
        </div>
      </li>
    );
  });

  const strikeStatus = (event) => {
    console.log("strikeStatus", event);
  };

  const remove = (index) => {
    const removeItem = variable.filter((item, i) => i != index);
    setVariable(removeItem);
  };

  const calculateProgress = () => {
    console.log("cacul", calculateProgress);
    let percentage = (checked.length / variable.length) * 100;
    if (isNaN(percentage)) {
      return null;
    } else {
      return percentage;
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
            {todo}
          </ul>
        </div>
      </div>

      {calculateProgress() == null ? (
        <CircleProgress percentage={0} strokeWidth={8} />
      ) : (
        <CircleProgress
          percentage={calculateProgress()}
          strokeWidth={8}
          primaryColor={["#fcba03", "#92d7f1"]}
          width={300}
        />
      )}
    </div>
  );
};
