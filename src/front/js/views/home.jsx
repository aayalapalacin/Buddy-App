import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import TodoList from "../component/todoList.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Buddy App</h1>
      <TodoList />
    </div>
  );
};
