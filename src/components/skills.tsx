import { Fade } from "react-awesome-reveal";
import Prog from "./skill-prog";
import htmlIcon from '../assets/img/html-5.png';
import jsIcon from '../assets/img/js.png'
import phpIcon from '../assets/img/php.png';
import pyIcon from '../assets/img/python.png';
import nodeIcon from '../assets/img/node-js.png';
import reactIcon from '../assets/img/science.png';

function Skills(){
    return(
        <Fade direction='up' damping={0.2} duration={700} fraction={0.1} className="w-5/6 m-auto rounded-xl shadow-lg p-5 md:p-10 lg:p-10 mb-5" cascade>
            <div>
                <h3 className="under-line px-5 w-fit py-4 text-3xl mb-5" style = {{width: 'fit-content'}}>Skills</h3>

                <div className="flex-wrap flex justify-center">
                    <Prog text="HTML/CSS" icon={htmlIcon} alt='html icon'></Prog>
                    <Prog text="Javascript(Typescript)" icon={jsIcon} alt='js icon'></Prog>
                    <Prog text="PHP" icon={phpIcon} alt='php icon'></Prog>
                    <Prog text="Python" icon={pyIcon} alt='python icon'></Prog>
                    <Prog text="Node js" icon={nodeIcon} alt='node-js icon'></Prog>
                    <Prog text="React js" icon={reactIcon} alt='react-js icon'></Prog>
                </div>
            </div>
        </Fade>
    )
}

export default Skills;