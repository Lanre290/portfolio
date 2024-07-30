interface prog{
    text?:string;
    value?:number;
}

function Prog(data:prog){
    return(
        <div className="h-7 rounded-xl relative bg-gray-400 mt-5">
            <div className="absolute top-0 bottom-0 right-0 left-0 h-7 rounded-xl flex flex-row justify-between" style = {{width: `${data.value}%`, backgroundColor: '#38e819'}}>
                <h3 className="text-gray-50 ml-5">{data.text}</h3>
                <h3 className="text-gray-50 ml-5 mr-20">{data.value}%</h3>
            </div>
        </div>
    )
}

export default Prog