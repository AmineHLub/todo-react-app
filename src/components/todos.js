import React, { useState } from 'react';
import '../style/main.css';
import TodosInput from './todosComponents/TodosInput';
import TodosList from './todosComponents/TodosList';

const TodosContainer = () => {
  const [todos, addTodos] = useState([]);
  const [todo, createTodo] = useState('');

  const handleChange = (e) => {
    createTodo(e.target.value);
  };

  const addingTodos = () => {
    if (todo !== '') {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        name: todo,
        completion: false,
      };
      addTodos([newTodo, ...todos]);
    }
  };

  const deleteTask = (el) => {
    addTodos(todos.filter((todoArr) => todoArr.id !== el));
  };

  return (

    <div className="todos-container">
      <TodosInput addingTodos={addingTodos} handleChange={handleChange} />
      <TodosList deleteTask={deleteTask} todos={todos} />
    </div>
  );
};

export default TodosContainer;
