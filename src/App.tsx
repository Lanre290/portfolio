import './App.css'
import Styling from './components/style'
import Header from './components/header'
import Bio from './components/bio'
import Education from './components/education'
import '../src/assets/css/users/user-profile.css';
import './index.css'
import Skills from './components/skills'
import Services from './components/services'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Styling></Styling>

        <Header></Header>
        <div className='flex flex-wrap justify-center'>
            <Bio></Bio>
            <Education></Education>
          <Skills></Skills>
          <Services></Services>
          <Footer></Footer>
        </div>
      </div>

    </>
  )
}

export default App
