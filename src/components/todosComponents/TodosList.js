/* eslint-disable react/prop-types */
import React from 'react';

export default function TodosList(todoz) {
  const { arrOfTodos } = todoz;
  return (
    <div className="todos-list-wraper">
      <ul>
        {
          arrOfTodos.map((el) => (
            <>
              <li key={el.id}>{el.name}</li>
            </>
          ))
        }
      </ul>
    </div>
  );
}
