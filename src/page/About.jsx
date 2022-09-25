import '../styles/styles.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SectionProfile from '../components/SectionProfile'

function About() {
  return (
    <div>
      <main className='section'>
        <SectionProfile></SectionProfile>
        <Footer></Footer>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default About
