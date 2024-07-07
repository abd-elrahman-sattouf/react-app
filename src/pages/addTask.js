import React from 'react'
import NewTask from '../hooks/useState/newTask'

function AddTask() {
  return (
    <div>
      <p>now add your task in the field and press the button</p>
      <NewTask />
    </div>
  )
}

export default AddTask