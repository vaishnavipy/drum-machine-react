import React,{useRef,useEffect} from "react";
import useBoard from "./useBoard";
import UsehandleClick from "./usehandleClick";



function HeaterKeyboard(props){

    const [boardArray] = useBoard();
  
    const bgColor ={backgroundColor:props.bgColor}
    const boardKeys = boardArray.map((key,index) =>  
        {
           
            return (<div className="keys" onMouseDown={(e)=>
            UsehandleClick({power:props.power,
            volume:props.volume,
            handleKeyNameChange:props.handleKeyNameChange},e)}  
            id={index} style={bgColor} >{key.keyTrigger}
            <audio src={key.url} />
            </div>)
        })
     
    return(
        <div className="board-container">
            
        {boardKeys}
        </div>)


}

export default HeaterKeyboard;