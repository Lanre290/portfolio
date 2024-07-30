import { Fade } from "react-awesome-reveal";

function Education(){
    return(
        <Fade direction="up" duration={700} className="m-5 w-5/6 md:w-2/5 sm:w-5/6 shadow-lg mt-20  p-10 rounded-xl" cascade>
            <a name="edu">
            <div className="">
                <font className="under-line px-5 py-4 text-3xl">Education</font>
                <div className="work-experience layout-spacing border-none w-full m-auto sm:ml-0 mt-20 bg-transparent">
                    <div className="widget-content widget-content-area border-none bg-transparent">
                        <div className="timeline-alter">
                        
                            <div className="item-timeline text-3xl">
                                <div className="t-meta-date">
                                    <p>09 Sep 2016</p>
                                </div>
                                <div className="t-dot" data-original-title="" title="">
                                </div>
                                <div className="t-text">
                                    <p>Supreme torch International school</p>
                                </div>
                            </div>

                            <div className="item-timeline">
                                <div className="t-meta-date">
                                    <p>18 Oct 2018</p>
                                </div>
                                <div className="t-dot" data-original-title="" title="">
                                </div>
                                <div className="t-text">
                                    <p>Mefkay schools</p>
                                    <p>see: <a href="https://mefkayschools.org" target="_blank">Mefkay school</a></p>
                                </div>
                            </div>

                            <div className="item-timeline">
                                <div className="t-meta-date">
                                    <p className="">15 Jan 2024</p>
                                </div>
                                <div className="t-dot" data-original-title="" title="">
                                </div>
                                <div className="t-text">
                                    <p>Student</p>
                                    <p>Lagos state university. see: <a href="https://lasu.edu.ng" target="_blank">lasu.edu.ng</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </a>
        </Fade>
    )
}

export default Education;