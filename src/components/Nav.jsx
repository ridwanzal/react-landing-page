import '../styles/styles.scss'
import logo from '../assets/rwz.svg';
import github from '../assets/github.svg';
import githubBlack from '../assets/github-black.svg';

function Nav() {
  return (
    <div className='nav-container'>
        <div className='nav white nav-desktop'>
          <div className='wrapper'>
            <ul className='nav-list'>
              <li className="item logo">
                  <a href="#"><img class="logo-item" src={logo} /></a>
              </li>
              <li className="item">
                <a href="#">About Me</a>
              </li>
              <li className="item">
                <a href="#">Portfolio</a>
              </li>
              <li className="item">
                <a href="#">Writing</a>
              </li>
              <li className='item right'>
              <a href="https://github.com/ridwanzal" target="_blank">
                <img class="icon-github" src={githubBlack}/>
                Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='nav white nav-mobile'>
          <div className='logo'>
            <img className='logo-item' src={logo}/>
          </div>
          <ul className='nav-list'>
              <li className="item">
                <a href="#">About Me</a>
              </li>
              <li className="item">
                <a href="#">Portfolio</a>
              </li>
              <li className="item">
                <a href="#">Writing</a>
              </li>
              <li className="item">
                <a href="#">Github Page</a>
              </li>
          </ul>
        </div>
    </div>
  )
}

export default Nav
