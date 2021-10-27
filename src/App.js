import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import Navbar from './components/navbar';
import About from './about';

function App() {
  const [open, OpenNav] = useState(false);
  return (
    <Router>
      <div>
        {open && <Navbar OpenNav={OpenNav} open={open} />}
        <Switch>
          <Route exact path="/">
            <Main OpenNav={OpenNav} open={open} />
          </Route>
          <Route path="/about">
            <About OpenNav={OpenNav} open={open} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
