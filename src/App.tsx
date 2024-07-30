import { useState } from 'react'
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
  const [state, setState] = useState('none')
  const scrollToTop = () => {
    window.scrollBy({behavior: 'smooth', 'top': -99999999999999, 'left': 0});
  }
  return (
    <>
    {
      window.onscroll = () => {
        if(window.scrollY == 0){
          setState('none');
        }
        else{
          setState('block');
        }
      }
    }
      <div className='overflow-x-hidden'>
        <Styling></Styling>

        <Header></Header>
        <div className='flex flex-wrap justify-center'>
            <Bio></Bio>
            <Education></Education>
          <Skills></Skills>
          <Services></Services>
          <Footer></Footer>
          <button className='scroll-btn text-3xl flex items-center justify-center shadow-lg' style = {{display: state}} onClick={scrollToTop}><i className="fa fa-chevron-up"></i></button>
        </div>
      </div>

    </>
  )
}

export default App
