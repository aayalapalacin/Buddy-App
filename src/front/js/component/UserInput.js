import React, { useState } from "react";

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
  const todo = variable.map((item, index) => {
    console.log("item", item);
    console.log("index", index);
    console.log("variable", variable);
    return (
      <li className="list-group-item item" key={index}>
        {item}

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
          className="item userInput"
          onKeyDown={todoItem}
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
          placeholder="What needs to be done?"
        />
      </div>
      <div>
        <ul id="todoUL">{todo}</ul>
      </div>
    </div>
  );
};
