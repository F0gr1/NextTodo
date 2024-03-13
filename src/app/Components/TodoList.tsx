"use client";
import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(["task1", "task2", "task3"]);
  const [task, setTask] = useState("");
  const addTask = () => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            {task}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TodoList;
