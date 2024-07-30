import { Fade } from "react-awesome-reveal";
import Prog from "./skill-prog";

function Skills(){
    return(
        <Fade direction='up' damping={0.2} duration={700} className="w-5/6 m-auto rounded-xl shadow-lg p-10 mb-5" cascade>
            <div>
                <h3 className="under-line px-5 w-fit py-4 text-3xl mb-20" style = {{width: 'fit-content'}}>Skills</h3>

                <div className="m-20"></div>

                <Prog text="HTML/CSS" value = {99.9}></Prog>
                <Prog text="Javascript(Typescript)" value = {85}></Prog>
                <Prog text="PHP" value = {80}></Prog>
                <Prog text="Python" value = {83}></Prog>
                <Prog text="Node js" value = {55}></Prog>
                <Prog text="React js" value = {78}></Prog>
            </div>
        </Fade>
    )
}

export default Skills;