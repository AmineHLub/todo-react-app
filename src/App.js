import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="calculator-wrapper">
      <Navbar />
      <Calculator />
    </div>
  );
}

export default App;
