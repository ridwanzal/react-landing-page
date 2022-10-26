import '../styles/styles.scss'
import githubBlack from '../assets/github-black.svg';
import logoMain from '../assets/logo.png';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLinkClicked, setLinkClicker] = useState(false);

  function toggleMode() {
    let element = document.body;
    element.classList.toggle("dark");
    setIsClicked(isClicked => !isClicked);
  }

  const toggleMenuMobile = () => {
    setShowMenu(!showMenu);
  }

  const passClick = () => {
    console.log('clicked')
    setShowMenu(!showMenu);
  }
  
  const menu = [
    {
        "name": "About",
        "link": "/about",
        "addClass": "item"
    },
    {
        "name": "Designs",  
        "link": "/designs",
        "addClass": "item"
    },
    {
        "name": "Projects",
        "link": "/projects",
        "addClass": "item"
    },
    {
        "name": "Articles",
        "link": "/articles",
        "addClass": "item"
    },
    {
        "name": "Blog",
        "link": "/blog",
        "addClass": "item"
    }
  ];

  return (
    <div className='nav-container'>
      <div className='nav nav-desktop'>
        <div className='wrapper'>
          <ul className='nav-list'>
              <li className="item logoname">
                  <Link to="/">
                  <img className='main-logo' src={logoMain} alt="" width="20"/>&nbsp;RIDWANZAL</Link>
              </li>
              {menu &&
                menu.map(({ name, link, addClass }) => (
                  <li key={name} className={addClass}>
                    <Link to={link}>{name}</Link>
                  </li>
              ))}
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
          <button className='menu bi-justify-right' onClick={toggleMenuMobile}>
            {showMenu ? "" : ""}
          </button>
        </div>
        <ul className={`nav-list-mobile ${showMenu ? "show" : "hide"}`}>
          {menu &&
            menu.map(({ name, link, addClass }) => (
              <li key={name} className={addClass}>
                <Link onClick={passClick} to={link}>{name}</Link>
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav
