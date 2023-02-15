
import './App.css';
import React, { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>This is a Checklist for my FFXIV dailies!</h1>
      <TodoList>

      </TodoList>
    </div>
  );
}

function TodoList() {
  const [todoList, setTodoList] = useState([
    { id: 1, task: "Daily Roulettes", completed: false },
    { id: 2, task: "Tribal quests", completed: false },
    { id: 3, task: "Water Plants", completed: false },
    { id: 4, task: "Island Sanctuary", completed: false},
    { id: 5, task: "Mine a map", completed: false},
  ]);

  function handleCheckboxClick(id) {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    }));
  }

  function handleCheckAll() {
    setTodoList(todoList.map(todo => ({ ...todo, completed: true })));
  }

  function handleUncheckAll() {
    setTodoList(todoList.map(todo => ({ ...todo, completed: false })));
  }

  const allTasksDone = todoList.every(todo => todo.completed);

  return (
    <div>
      <h2>Todo List:</h2>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxClick(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.task}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckAll} disabled={allTasksDone}>
        Check All
      </button>
      <button onClick={handleUncheckAll} disabled={!allTasksDone}>
        Uncheck All
      </button>
    </div>
  );
}

