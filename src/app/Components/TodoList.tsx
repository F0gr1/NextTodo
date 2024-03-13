"use client";
import React, { useState } from "react";
import style from "./todo.module.css";
type task = {
  id: number;
  title: string;
  isDone: boolean;
};
const TodoList = () => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [task, setTask] = useState<task>({ id: 1, title: "", isDone: false });
  const generateId = () => {
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    return newId;
  };

  const setTaskWithAutoIncrement = (title: string) => {
    setTask({ id: generateId(), title: title, isDone: false });
  };
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask({ id: generateId(), title: "", isDone: false });
  };
  const DoneTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };
  return (
    <div className={style.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTaskWithAutoIncrement(e.target.value)}
          placeholder="ADD TODO"
          className={style.inputTodo}
        />
      </form>
      <ul className={style.todos}>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={style.todo}
            onClick={() => DoneTask(index)}
          >
            {!task.isDone ? task.title : <s>{task.title}</s>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
