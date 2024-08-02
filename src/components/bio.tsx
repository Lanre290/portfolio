import { Fade } from "react-awesome-reveal";

function Bio(){
    return(
        <Fade direction={screen.width > 768 ? 'left' : 'up'} fraction={0.1} duration={700} className="m-5 w-5/6 md:w-2/5 sm:w-5/6 shadow-lg mt-20  p-10 rounded-xl" cascade>
            <div>
                <h3 className="under-line px-5 w-fit py-4 text-3xl" style = {{width: 'fit-content'}}>Bio</h3>
                <h3 className="mt-10">
                I'm a web developer based in Lagos, Nigeria, specializing in creating and designing websites for clients worldwide. I have expertise in HTML, CSS, JavaScript, PHP, React, and Node.js. Additionally, I have experience building desktop applications with Python.

                I blend creativity with technical skills to deliver user-friendly and visually appealing websites. My goal is to bring innovative solutions to my clients' digital needs, ensuring they stand out in a competitive online landscape.
                </h3>
            </div>
        </Fade>
    )
}

export default Bio;