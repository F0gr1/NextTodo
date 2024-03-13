"use client";
import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState(["task1", "task2", "task3"]);

  const addTask = () => {
    setTask([...task, "task4"]);
  };

  return (
    <div>
      {task.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
      <input type="text" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TodoList;
