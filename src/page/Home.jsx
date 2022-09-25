import '../styles/styles.scss'
import Nav from '../components/Nav'
import Masthead from '../components/Masthead'
import Footer from '../components/Footer'
import SectionExpert from '../components/SectionExpert'
import SectionContact from '../components/SectionContact'
import SectionService from '../components/SectionService'

function Home() {
  return (
    <div>
      <main className='section'>
        <Masthead></Masthead>
        <SectionExpert></SectionExpert>
        <SectionService></SectionService>
        <SectionContact></SectionContact>
        <Footer></Footer>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Home
