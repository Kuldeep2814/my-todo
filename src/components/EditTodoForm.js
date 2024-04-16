import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions/todoActions";

const EditTodoForm = ({ task }) => {
  const [value, setValue] = useState(task.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(task.id, value));
  };

  return (
    <form onSubmit={handleSubmit} className="edit-todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="edit-todo-input"
      />
      <button type="submit" className="edit-todo-btn">
        Save
      </button>
    </form>
  );
};

export default EditTodoForm;
