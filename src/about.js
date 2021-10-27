/* eslint-disable react/prop-types */
import React from 'react';
import './style/about.css';

function About({ OpenNav, open }) {
  return (
    <>
      <button className="hamburger-menu" type="button" onClick={() => OpenNav(!open)}> ≡ </button>
      <div className="about-page-div">
        hello from about page
      </div>
    </>
  );
}

export default About;
