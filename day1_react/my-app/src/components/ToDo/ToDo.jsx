import React, { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [update, setUpdate] = useState({
    id: null,
    value: "",
  });

  const submitUpdate =value => {
    updateTodo(update.id, value)
    setUpdate({
        id: null,
        value: ''
    });
  };

  if (update.id) {
    return <ToDoForm update={update} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <IoCloseCircleSharp
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <AiFillEdit onClick={() => setUpdate({ id: todo.id, value: todo.text})}
          className="edit-icon" />
      </div>
    </div>
  ));
};

export default ToDo;
