import React from "react";
import InputForm from "./InputForm";
const TodoApp = () => {
  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Simple Todo App</h4>
              <InputForm />
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Buy Milk.
                        <i className="input-helper"> </i>
                      </label>
                    </div>
                    <i className="remove mdi mdi-close-circle-outline"></i>
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="checkbox"
                          type="checkbox"
                          checked=""
                        />
                        Wash dishes.
                        <i className="input-helper"></i>
                      </label>
                    </div>
                    <i className="remove mdi mdi-close-circle-outline"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
