import './styles/styles.scss'
import Nav from './components/Nav'
import Masthead from './components/Masthead'
import Footer from './components/Footer'
import SectionExpert from './components/SectionExpert'

function App() {
  return (
    <div>
      <main className='section'>
        <Nav></Nav>
        <Masthead></Masthead>
        <SectionExpert></SectionExpert>
        <Footer></Footer>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
