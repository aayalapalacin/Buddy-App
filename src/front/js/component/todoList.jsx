import React from "react";
import { Link } from "react-router-dom"
function TodoList() {
  return (
    <div>
      <h1>This is the todoList</h1>
      <Link to="LoginPage">
        <button type="submit" value="Go Back"></button>
      </Link>
    </div>
  );
}

export default TodoList;
