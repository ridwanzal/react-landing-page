import './styles/styles.scss';
import Home from './page/Home';
import News from './page/News';
import Nav from './components/Nav';
import Designs from './page/Designs';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Login from './page/backview/Login';
import NotFound from './page/NotFound';
import About from './page/About';

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
            <Route path="/articles" element={<News />}>
            </Route>
            <Route path="/projects" element={<Projects />}>
            </Route>
            <Route path="/designs" element={<Designs />}>
            </Route>
            <Route path="/contact" element={<Contact />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
            <Route path="/" element={<Home />}>
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
