import './styles/styles.scss';
import Home from './page/Home';
import News from './page/News';
import Nav from './components/Nav';
import Portfolio from './page/Portfolio';

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
            <Route path="/portfolio" element={<Portfolio />}>
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
