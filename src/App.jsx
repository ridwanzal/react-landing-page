import './styles/styles.scss'
import Home from './page/Home'
import News from './page/News'
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
            <Route path="/news" element={<News />}>
            </Route>
            <Route exact path="/" element={<Home />}>
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
