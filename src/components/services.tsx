import { Fade } from "react-awesome-reveal";
import ServicesTile from "./servicesTile";

function Services(){
    return(
        <div className="w-5/6 m-auto mb-5">
            <Fade duration = {700} delay={600} direction='up' damping={20} cascade>
                <h3 className = 'under-line px-5 py-4 text-3xl mb-20'>Services</h3>
            </Fade>

            <div className="flex flex-wrap justify-center w-full">
                <ServicesTile icon="fa fa-globe" text = 'Website creation' value = 'Building visually apealling websites that suites your taste.'></ServicesTile>
                <ServicesTile icon="fa fa-internet-explorer" text = 'Web Applications' value = 'Building custom Full-stack web applications as you require.'></ServicesTile>
                <ServicesTile icon="fa fa-desktop" text = 'Desktop Applications' value = 'Building custom desktop applications as you require.'></ServicesTile>
            </div>
        </div>
    )
}

export default Services;