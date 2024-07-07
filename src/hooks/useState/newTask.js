import React, { useState } from "react";

function newTask() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [task , setTask] = useState("");

    const addTask = (event) => {
      setTask(event.target.value);
    }
  return (
    <div>
      <p>{task}</p>
      <input
      type='text'
      value={task}
      onChange={addTask}
      placeholder='add your task'
      />
    </div>
  )
}

export default newTask