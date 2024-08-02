import { Fade } from "react-awesome-reveal";

interface info{
    text?:string;
    value?:string;
    icon?:string;
}
function ServicesTile(data:info){
    return(
        <Fade direction="up" damping={2} fraction={0.1} duration={550} className="shadow-lg rounded-xl flex flex-col w-full p-10 px-0 mt-20 cursor-pointer m-5 lg:w-3/12 md:w-2/5 sm:w-2/5">
            <div>
                <div className="text-5xl rounded-full flex items-center justify-center text-gray-50 m-auto" style= {{backgroundColor: '#38e819', width: '140px', height: '140px', minWidth: '140px', minHeight: '140px'}}>
                    <i className={data.icon}></i>
                </div>
                <h3 className="text-2xl mt-5 w-full m-auto flex justify-center">{data.text}</h3>
                <div className="w-4/5 m-auto text-center">
                    {data.value}
                </div>
            </div>
        </Fade>
    )
}

export default ServicesTile;