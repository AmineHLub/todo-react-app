import '../../style/main.css';

// eslint-disable-next-line react/prop-types
export default function TodosInput({ addingTodos }) {
  return (
    <div className="input-wraper">
      <input className="todo-input" />
      <button type="button" onClick={addingTodos}> </button>
    </div>
  );
}
