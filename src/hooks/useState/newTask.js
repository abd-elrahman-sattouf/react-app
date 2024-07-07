import React, { useState, useEffect } from "react";

export default function NewTask() {
  const [task, setTask] = useState("");
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    console.log("Todos updated:", task);
  }, [task]);


  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    setTask((prevTask) => prevTask + "\n" + textInput);
    setTextInput(""); // Clear the input field after adding a task
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input name="textInput" type="text" value={textInput} onChange={handleTextChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {task.split("\n").map((taskItem, index) => (
          <li key={index}>{taskItem}</li>
        ))}
      </ul>
    </div>
  );
}