import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "../actions/todoActions";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id, task) => {
    dispatch(editTodo(id, task));
  };

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={handleAddTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            editTodo={(task) => handleEditTodo(todo.id, task)}
            task={todo}
          />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={() => handleDeleteTodo(todo.id)}
            toggleComplete={() => handleToggleTodo(todo.id)}
            editTodo={() => handleEditTodo(todo.id, todo.task)}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
