import React, { useReducer } from "react";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
const TodoApp = () => {
  const reducer = (todos, action) => {
    if ((action.type = "add")) {
      const newTodos = [...todos];
      newTodos.unshift(action.payload);
      return newTodos;
    }
  };
  const [todos, dispatchTodos] = useReducer(reducer, []);
  console.log(todos);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Simple Todo App</h4>
              <InputForm dispatchTodos={dispatchTodos} />
              <TodosList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
