/* eslint-disable react/prop-types */
import React from 'react';

export default function TodosList({ deleteTask, todos }) {
  if (todos) {
    return (
      <div className="todos-list-wraper">
        <ul>
          {
          todos.map((el) => (
            <li key={el.id}>
              <span>{el.name}</span>
              <button type="button" onClick={() => deleteTask(el.id)}>Remove</button>
            </li>
          ))
        }
        </ul>
      </div>
    );
  }
  return null;
}
