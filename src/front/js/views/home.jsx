import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import TodoList from "../component/todoList.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Buddy App</h1>
      <TodoList />
    </div>
  );
};
