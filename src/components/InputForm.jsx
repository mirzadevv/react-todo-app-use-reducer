import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const InputForm = ({ dispatchTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const handleAdd = () => {
    dispatchTodos({
      type: "add",
      payload: { id: uuid(), title: inputValue, isCompleted: false },
    });
    setInputValue("");
  };

  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        value={inputValue}
      />
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default InputForm;
