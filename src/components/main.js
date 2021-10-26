/* eslint-disable react/prop-types */
import '../App.css';
import Header from './header';
import TodosContainer from './todos';
import '../style/main.css';

function Main({ OpenNav, open }) {
  const closeNav = () => {
    if (open === true) {
      OpenNav(!open);
    }
  };
  return (
    <div className="main-page">
      <button type="button" onClick={() => OpenNav(!open)}> nav </button>
      <button type="button" onClick={closeNav}> closeNav </button>
      <Header />
      <TodosContainer />
    </div>
  );
}

export default Main;
