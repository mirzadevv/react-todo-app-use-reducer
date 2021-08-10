import React from "react";
const InputForm = () => {
  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
      />
      <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
        Add
      </button>
    </div>
  );
};

export default InputForm;
