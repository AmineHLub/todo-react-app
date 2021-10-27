import React from 'react';
import '../style/navbar.css';

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
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
