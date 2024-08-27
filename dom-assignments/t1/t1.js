// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

'use strict';

const ulElement = document.querySelector('ul');

todoList.forEach(function(todo) {
  const listItem =
    `<li>
      <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="todo-${todo.id}">${todo.task}</label>
    `;
  ulElement.insertAdjacentHTML('beforeend', listItem);
  });


