import '../../style/main.css';

// eslint-disable-next-line react/prop-types
export default function TodosInput({ addingTodos, handleChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[0].value = null;
    addingTodos();
  };
  return (
    <form onSubmit={handleSubmit} className="input-wraper">
      <input className="todo-input" onChange={(e) => handleChange(e)} />
      <button type="submit"> </button>
    </form>
  );
}
