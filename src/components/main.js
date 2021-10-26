import '../App.css';
import Header from './header';
import TodosContainer from './todos';
import '../style/main.css';

function Main() {
  return (
    <div className="main-page">
      <Header />
      <TodosContainer />
    </div>
  );
}

export default Main;
