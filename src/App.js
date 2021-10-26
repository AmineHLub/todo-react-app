import './App.css';
import { useState } from 'react';
import Main from './components/main';
import Navbar from './components/navbar';

function App() {
  const [open, OpenNav] = useState(false);
  return (
    <div>
      {open && <Navbar />}
      <Main OpenNav={OpenNav} open={open} />
    </div>
  );
}

export default App;
