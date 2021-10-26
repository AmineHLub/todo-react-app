import React from 'react';
import '../style/main.css';
import TodosInput from './todosComponents/TodosInput';
import TodosList from './todosComponents/TodosList';

const todoz = [
  {
    id: 1,
    name: 'todo1',
  },
  {
    id: 2,
    name: 'todo2',
  },
  {
    id: 3,
    name: 'todo3',
  },
];

const TodosContainer = () => (
  <div className="todos-container">
    <TodosInput arrOfTodos={todoz} />
    <TodosList arrOfTodos={todoz} />
  </div>
);

export default TodosContainer;
