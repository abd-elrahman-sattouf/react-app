import React, { useState, useEffect } from "react";
export default function NewTask() {
  const [task, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    console.log("Todos updated:", task);
  }, [task]);

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    setTasks([...task, textInput]);
    setTextInput(""); 
  };
   const removeTask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input name="textInput" type="text" value={textInput} onChange={handleTextChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}