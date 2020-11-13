import React,{useRef,useEffect} from "react";
import useBoard from "./useBoard"


function HeaterKeyboard(props){

    const [boardArray] = useBoard();
  
    const bgColor ={backgroundColor:props.bgColor}
    const boardKeys = boardArray.map((key,index) =>  
        {
           
            return (<div className="keys" onMouseDown={handleClick}  id={index} style={bgColor} >{key.keyTrigger}
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
            
        {boardKeys}
        </div>)


}

export default HeaterKeyboard;