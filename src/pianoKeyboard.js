import React from "react";
import useBoard from "./useBoard";
import UsehandleClick from "./usehandleClick";

function PianoKeyboard(props){
    const [boardArray1,boardArray2] = useBoard();

    const bgColor={backgroundColor:props.bgColor}
    const board = boardArray2.map((key,index) => {

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
            {board}
        </div>
        )



}

export default PianoKeyboard;