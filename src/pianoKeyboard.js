import React,{useState,useEffect} from "react";
import useBoard from "./useBoard";

function PianoKeyboard(props){
    const [boardArray1,boardArray2] = useBoard();

    const bgColor={backgroundColor:props.bgColor}
    const board = boardArray2.map((key,index) => {

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
            {board}
        </div>
        )



}

export default PianoKeyboard;