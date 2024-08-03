import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

function Header(){
    const [isShown, setIsShown] = useState(screen.width > 640 ? 'flex': 'none');
    let currentScrollPosition = 0;

    if(screen.width < 641){
        window.onscrollend = () => {
            let newScrollPosition = window.scrollY;
            if(newScrollPosition < currentScrollPosition){
                setIsShown('none');
            }
            else{
                setIsShown('flex');
            }
            currentScrollPosition = newScrollPosition;
        }
    }

    function scrollToHome(){
        window.scrollBy({behavior: 'smooth', 'top': -99999999999999, 'left': 0});
    }

    return(
        <div className= "w-screen h-screen relative sm:h-screen home-bg">
            <div className="absolute top-0 right-0 bottom-0 left-0 w-screen h-full flex flex-col justify-between" style={{background: 'linear-gradient(90deg, #000000ee, #00000033)'}}>
                <div className="flex flex-col md:flex-row sm:flex-row justify-between">
                    <h3 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl text-gray-50 font-serif m-4 sm:m-10 md:m-10 lg:m-15 mb-3 logo relative w-min">TechX</h3>

                    <div className = "flex flex-row header-links-cont shadow-lg rounded-3xl p-6 backdrop-blur-3xl bg-opacity-5 bg-gray-50 m-auto sm:m-10 md:m-10 z-50" style = {{'display': isShown}}>
                        <a href = "#home" className = "cursor-pointer text-5xl mr-5 header-links text-gray-400" onClick={scrollToHome}>
                            <i className='fa fa-home'></i>
                        </a>
                        <a href = "#services" className = "cursor-pointer text-5xl text-gray-400 mr-5 header-links">
                            <i className='fa fa-bookmark'></i>
                        </a>
                        <a href = "#contact" className = "cursor-pointer text-5xl text-gray-400 mr-5 header-links">
                            <i className='fa fa-volume-control-phone'></i>
                        </a>
                    </div>
                </div>

                <div id="main_header_area" className="h-4/5 sm:h-3/5 md:h-3/5 flex align-center sm:p-10 md:p-10 px-2">
                <div className="md:ml-20 lg:ml-40 sm:ml-10">
                    <Fade direction='up' cascade delay={300} duration={600}>
                        <div className="name_tag text-gray-50">Hello, I'm</div>
                    </Fade>
                    <span className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl text-gray-50 name typing" id = "name">
                    
                    <Typewriter
                        words={['Ashiru Sheriff', 'A Student', 'A Developer', 'A Freelancer','A Problem solver']}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                    &nbsp;

                    </span>
                    <div className="bio md:w-5/6 sm:w-full lg:3/6 text-2xl md:text-2l sm:text-2xl text-gray-50 mt-5">
                        A Professional Web developer and passionate problem solver. I combine my creative problem solving skills to solve real world problems by building long-lasting, efficient and visually appealing websites. 
                    </div>

                    <div className="flex flex-row mt-5">
                        <button className="cv-button text-gray-50">Download CV</button>
                        <button className="my-work-btn">My Work</button>
                    </div>

                    <div className="flex flex-row mt-5">
                        <Fade direction='up' cascade delay={300} duration={600}>
                            <a target='_blank' href="https://web.facebook.com/profile.php?id=100083136165965" className="social-links"><i className="fa fa-facebook"></i></a>
                        </Fade>
                        <Fade direction='up' cascade delay={400} duration={600}>
                            <a target='_blank' href="https://x.com/lanre2967" className="social-links"><i className="fa fa-twitter"></i></a>
                        </Fade>
                        <Fade direction='up' cascade delay={500} duration={600}>
                            <a target='_blank' href="https://www.instagram.com/lanre_290/" className="social-links"><i className="fa fa-instagram"></i></a>
                        </Fade>
                        <Fade direction='up' cascade delay={600} duration={600}>
                            <a target='_blank' href="https://www.linkedin.com/in/ashiru-olanrewaju-219725223" className="social-links"><i className="fa fa-linkedin"></i></a>
                        </Fade>
                        <Fade direction='up' cascade delay={700} duration={600}>
                            <a target='_blank' href="https://github.com/Lanre290" className="social-links"><i className="fa fa-github"></i></a>
                        </Fade>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;