import '../../style/main.css';

// eslint-disable-next-line react/prop-types
export default function TodosInput({ addingTodos, handleChange }) {
  return (
    <div className="input-wraper">
      <input className="todo-input" onChange={(e) => handleChange(e)} />
      <button type="button" onClick={addingTodos}> </button>
    </div>
  );
}
