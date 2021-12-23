import React, { useReducer } from "react";
import todosReducer from "../reducers/todosReducer";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
const TodoApp = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, []);
  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Simple Todo App</h4>
              <InputForm dispatchTodos={dispatchTodos} />
              <TodosList todos={todos} dispatchTodos={dispatchTodos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
