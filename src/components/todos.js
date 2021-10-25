import React from 'react';
import TodosInput from './todosComponents/TodosInput';
import TodosList from './todosComponents/TodosList';

const TodosContainer = () => (
  <div className="todos-container">
    <TodosInput />
    <TodosList />
  </div>
);

export default TodosContainer;
