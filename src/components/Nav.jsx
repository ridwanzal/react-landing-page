import '../styles/styles.scss'
import logo from '../assets/rwz.svg';

function Nav() {
  return (
    <div class="outter-wrapper">
        <nav className='nav nav-desktop'>
          <ul className='nav-list'>
            <li className="item logo">
                <a href="#"><img class="logo-item" src={logo} /></a>
            </li>
            <li className="item">
              <a href="#">Home</a>
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
             <a href="#"><i className='icon-search'></i>Github</a>
            </li>
          </ul>
        </nav>
        <nav className='nav nav-mobile'>
          <ul className='nav-list'>
          </ul>
        </nav>
    </div>
  )
}

export default Nav
