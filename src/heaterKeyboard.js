import React,{useRef,useEffect} from "react";
import useBoard from "./useBoard"


function HeaterKeyboard(props){

    const [boardArray] = useBoard();
  
    const bgColor ={backgroundColor:props.bgColor}
    const boardKeys = boardArray.map((key,index) =>  
        {
           
            return (<div className="keys" onMouseDown={handleClick}  id={index} style={bgColor} onMouseUp={handleMouseUp}>{key.keyTrigger}
            <audio src={key.url} />
            </div>)
        })
        
    
    function handleClick(event){
       
        if(props.power) { event.target.children[0].play() }
      
        event.target.style.backgroundColor ="#FEA500";
        props.handleKeyNameChange(event.target.id);
    }   
    
    function handleMouseUp(event){
        event.target.style.backgroundColor ="#808080";

    }

    return(
        <div className="board-container">
            
        {boardKeys}
        </div>)


}

export default HeaterKeyboard;