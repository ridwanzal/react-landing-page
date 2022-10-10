import './styles/styles.scss';
import Home from './page/Home';
import News from './page/News';
import Nav from './components/Nav';
import Designs from './page/Designs';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Login from './page/backview/Login';

import {
  BrowserRouter,
  Routes,
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
            <Route path="/projects" element={<Projects />}>
            </Route>
            <Route path="/designs" element={<Designs />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
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
