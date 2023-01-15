import React, { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.iscomplete = !todo.iscomplete;
      }
      return todo;
    });
    setTodos(updateTodo);
  };
  return (
    <div>
      <h1>What's On Your To Do List Today?</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default ToDoList;
