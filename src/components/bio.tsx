import { Fade } from "react-awesome-reveal";

function Bio(){
    return(
        <Fade direction='up' duration={700} className="m-5 w-5/6 md:w-2/5 sm:w-5/6 shadow-lg mt-20  p-10 rounded-xl" cascade>
            <div>
                <font className="under-line px-5 py-4 text-3xl">Bio</font>
                <h3 className="mt-10">
                    I'm Web Developer from California. I code and design websites worldwide. Mauris varius tellus vitae tristique sagittis. Sed aliquet, est nec auctor aliquet, orci ex vestibulum ex, non pharetra lacus erat ac nulla.

                    Sed vulputate, ligula eget mollis auctor, lectus elit feugiat urna, eget euismod turpis lectus sed ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut velit finibus, scelerisque sapien vitae, pharetra est. Nunc accumsan ligula vehicula scelerisque vulputate.
                </h3>
            </div>
        </Fade>
    )
}

export default Bio;