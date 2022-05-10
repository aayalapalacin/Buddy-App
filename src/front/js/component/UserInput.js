import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons";
import "../views/DragDrop/dragDrop.css";

export const UserInput = () => {
  const [listItem, setListItem] = useState("");
  const [variable, setVariable] = useState([]);

  const todoItem = (event) => {
    if (event.keyCode === 13) {
      const newTodoItem = [...variable, listItem];
      setVariable(newTodoItem);
      setListItem("");
    }
  };

  const strikeThroughItem = () => {
    if (strikeStatus === false) {
      setStrikeStatus(true);
    } else {
      setStrikeStatus(false);
    }
  };

  const todo = variable.map((item, index) => {
    return (
      <li className="list-group-item item " key={index}>
        {/* <button id="strikeBtn">
          <FontAwesomeIcon
            id="checkboxIcon"
            icon={faSquareCheck}
            // onClick={strikeThroughItem}
          ></FontAwesomeIcon>
        </button> */}

        <input name="cb" type="checkbox" id="cb"></input>
        <p class="strikethrough">{item}</p>

        <div className="mouseOver" onClick={() => remove(index)}>
          x
        </div>
      </li>
    );
  });

  const remove = (index) => {
    const removeItem = variable.filter((item, i) => i != index);
    setVariable(removeItem);
  };

  return (
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
  );
};
