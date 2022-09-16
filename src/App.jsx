import './styles/styles.scss'
import Nav from './components/Nav'
import Masthead from './/components/Masthead'

function App() {
  return (
    <div>
      <main className='section'>
        <Nav></Nav>
        <Masthead></Masthead>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
