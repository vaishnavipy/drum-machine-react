import React from "react";
import useBoard from "./useBoard";

function PianoKeyboard(props){
    const [boardArray1,boardArray2] = useBoard();

    const bgColor={backgroundColor:props.bgColor}
    const board = boardArray2.map((key,index) => {

        return (<div className="keys" onClick={handleClick}  id={index} style={bgColor} >{key.keyTrigger}
        <audio src={key.url} />
        </div>)
    })

    function handleClick(event){
       
        if(props.power) { 
            event.target.children[0].volume = props.volume/100;
            event.target.children[0].play() 
        }
      
        event.target.style.backgroundColor ="#FEA500";
        event.target.style.boxShadow ="none";

        setTimeout(function(){ 
            event.target.style.backgroundColor ="#808080";
            event.target.style.boxShadow ="3px 3px 5px black";
        
            },200)

        props.handleKeyNameChange(event.target.id);

       
    }   

   


    return(
        <div className="board-container">
            {board}
        </div>
        )



}

export default PianoKeyboard;