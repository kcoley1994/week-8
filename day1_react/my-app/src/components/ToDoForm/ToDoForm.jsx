import React, { useState, useEffect, useRef } from "react";

const ToDoForm = (props) => {
  const [input, setInput] = useState("");

  const inputValue = useRef(null)

  useEffect(()=> {
    inputValue.current.focus()
  })

  const Change = (event) => {
    setInput(event.target.value);
  }

  const Submit = (event) =>{
    event.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={Submit}>
      <input
        type="text"
        placeholder="Add To List"
        value={input}
        name="text"
        className="todo-input"
        onChange={Change}
        ref={inputValue}
      />
      <button className="todo-button"> Add To List </button>
    </form>
  );
};

export default ToDoForm;
