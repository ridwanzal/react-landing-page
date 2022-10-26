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
import Blog from './page/Blog';
import BlogDetail from './page/BlogDetail';
import BlogSubmit from './page/backview/BlogSubmit';

import {
  BrowserRouter,
  HashRouter,
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
            <Route path="/" index element={<Home />}>
            </Route>
            <Route path="/articles" index element={<News />}>
            </Route>
            <Route path="/projects" index element={<Projects />}>
            </Route>
            <Route path="/designs" index element={<Designs />}>
            </Route>
            <Route path="/contact" index element={<Contact />}>
            </Route>
            <Route path="/login" index element={<Login />}>
            </Route>
            <Route path="/about" index element={<About />}>
            </Route>
            <Route path="/blog" index element={<Blog />}>
            </Route>
            <Route path="/blog/:id" index element={<BlogDetail />}>
            </Route>
            <Route path="*" index element={<NotFound />}>
            </Route>
            <Route path="/blog/add" index element={<BlogSubmit />}>
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
