/* eslint-disable react/prop-types */
import React from 'react';

export default function TodosList({ deleteTask, todos }) {
  if (todos) {
    return (
      <div className="todos-list-wraper">
        <ul>
          {
          todos.map((el) => (
            <>
              <li key={el.id}>{el.name}</li>
              <button type="button" onClick={() => deleteTask(el.id)}>Remove</button>
            </>
          ))
        }
        </ul>
      </div>
    );
  }
  return null;
}
