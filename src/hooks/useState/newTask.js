import React, { useState } from "react";

export default function NewTask() {
    const [task, setTask] = useState("");
    const [inputValue, setInputValue] = useState({
    textInput: "",
  });

  const handleTextChange = (e) => {
    e.preventDefault();
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

   const addTask = (event) => {
    event.preventDefault();
    setTask(inputValue.textInput);
  };

   
  return (
    <div>
      <p>{task}</p>
      <form onSubmit={addTask}>
        <input name="textInput" type="text" onChange={handleTextChange} />
        <button type="submit">change text</button>
      </form>
    </div>
  )
}

