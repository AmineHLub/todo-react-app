import './App.css';
import { useState } from 'react';
import Main from './components/main';
import Navbar from './components/navbar';

function App() {
  const [open, OpenNav] = useState(false);
  return (
    <div>
      {open && <Navbar OpenNav={OpenNav} open={open} />}
      <Main OpenNav={OpenNav} open={open} />
    </div>
  );
}

export default App;
