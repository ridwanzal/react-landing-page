import './styles/styles.scss'
import Home from './page/Home'
import About from './page/About'
import Nav from './components/Nav'

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <div> 
      <main className='section'>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<Home/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
