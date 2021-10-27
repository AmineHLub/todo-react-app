import React from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ OpenNav, open }) => {
  const closeNav = () => {
    if (open === true) {
      OpenNav(!open);
    }
  };
  return (
    <>
      <nav className="navbar-container">
        <button className="close-hamburger" type="button" onClick={closeNav}> X </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
