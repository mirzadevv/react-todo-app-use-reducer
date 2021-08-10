import React, { useReducer } from "react";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
const TodoApp = () => {
  const reducer = (todos, action) => {
    const todo = action.payload;
    switch (action.type) {
      case "add": {
        const newTodos = [...todos];
        newTodos.unshift(action.payload);
        return newTodos;
      }

      case "completedChange": {
        const newTodos = todos.map((item) => {
          if (todo.id === item.id) {
            return { ...item, isCompleted: !todo.isCompleted };
          } else {
            return item;
          }
        });

        return newTodos;
      }

      default:
        return todos;
    }
  };
  const [todos, dispatchTodos] = useReducer(reducer, []);

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
