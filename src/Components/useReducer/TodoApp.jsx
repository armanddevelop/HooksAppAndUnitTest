import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./Components/TodoAdd";
import { TodoList } from "./Components/TodoList";
import "./styles.css";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };
  const handleAddToDo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
  };
  const handleToggle = (todoId) => {
    console.log(todoId);
    const action = {
      type: "toggle",
      payload: todoId,
    };
    dispatch(action);
  };
  return (
    <div>
      <h1>To do App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddToDo={handleAddToDo} />
        </div>
      </div>
    </div>
  );
};
