import React, { useState } from 'react';
import '../style/main.css';
import TodosInput from './todosComponents/TodosInput';
import TodosList from './todosComponents/TodosList';

const TodosContainer = () => {
  const [todoz, addTodos] = useState([]);

  const addingTodos = () => {
    const newTodo = {
      id: 1,
      name: 'title',
    };
    addTodos([newTodo, ...todoz]);
    console.log(todoz);
  };

  return (

    <div className="todos-container">
      <TodosInput addingTodos={addingTodos} />
      <TodosList arrOfTodos={todoz} />
    </div>
  );
};

export default TodosContainer;
