/* eslint-disable react/prop-types */
import '../App.css';
import Header from './header';
import TodosContainer from './todos';
import '../style/main.css';

function Main({ OpenNav, open }) {
  return (
    <div className="main-page">
      <button className="hamburger-menu" type="button" onClick={() => OpenNav(!open)}> ≡ </button>
      <Header />
      <TodosContainer />
    </div>
  );
}

export default Main;
