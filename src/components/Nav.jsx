import '../styles/styles.scss'
import logo from '../assets/rwz.svg';
import github from '../assets/github.svg';
import githubBlack from '../assets/github-black.svg';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  function toggleMode() {
    let element = document.body;
    element.classList.toggle("dark");
    setIsClicked(isClicked => !isClicked);
  }

  return (
    <div className='nav-container'>
      <div className='nav nav-desktop'>
        <div className='wrapper'>
          <ul className='nav-list'>
            <li className="item logoname">
              <Link to="/">RIDWANZAL</Link>
            </li>
            <li className='item'>
              <Link to="/about">About</Link>
            </li>
            <li className='item'>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className='item'>
              <Link to="/news">News</Link>
            </li>
            <li className='item right'>
              <div className='button-switch'>
                <button className="dark-mode-btn" onClick={toggleMode}>{isClicked ? "Light ☼" : "Dark ☾"}</button>
              </div>
              <a href="https://github.com/ridwanzal" target="_blank">
                <img className="icon-github svg" src={githubBlack} />
                Github</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='nav nav-mobile'>
        <div className='logo'>
          <Link to="/">RIDWANZAL</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav