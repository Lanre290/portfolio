interface prog{
    text?:string;
    icon?:string;
    alt?:string;
}

function Prog(data:prog){
    return(
        // <div className="h-7 rounded-xl relative bg-gray-400 mt-5">
        //     <div className="absolute top-0 bottom-0 right-0 left-0 h-7 rounded-xl flex flex-row justify-between" style = {{width: `${data.value}%`, backgroundColor: '#38e819'}}>
        //         <h3 className="text-gray-50 ml-5">{data.text}</h3>
        //         <h3 className="text-gray-50 ml-5 mr-20">{data.value}%</h3>
        //     </div>
        // </div>
        <div className="p-3 sm:p-5 md:p-5 lg:p-5 w-1/2 sm:w-1/2 md:1/3 lg:w-1/3 flex flex-col justify-center items-center">
            <img src={data.icon} alt="" width={60} height={60}/>
            <h3 className="text-lime-600 sm:text-2xl md:text-3xl lg:text-3xl">{data.text}</h3>
        </div>
    )
}

export default Prog