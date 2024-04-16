import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../actions/todoActions";
import "../styles/Todo.css";

const Todo = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  const handleToggleComplete = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(task.id));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo(task.id, editedTask));
    setEditing(false);
  };

  return (
    <div className={`todo ${task.completed ? "completed" : ""}`}>
      {editing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleSave}
          autoFocus
          className="todo-input"
        />
      ) : (
        <p onClick={handleToggleComplete} className="todo-text">
          {task.task}
        </p>
      )}
      <div className="todo-icons">
        <span className="edit-icon" onClick={handleEdit}>
          ✎
        </span>
        <span className="delete-icon" onClick={handleDelete}>
          ❌
        </span>
      </div>
    </div>
  );
};

export default Todo;
