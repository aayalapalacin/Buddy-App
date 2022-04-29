import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "./DragDrop/dragDrop.css";
import TodoList from "./DragDrop/todoList.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <h1>Buddy App</h1>
      <TodoList />
    </div>
  );
};
