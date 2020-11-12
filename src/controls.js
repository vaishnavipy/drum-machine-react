import React,{useRef} from "react";
import "./App.css"

function Controls(props){

    const pSliderRef = useRef();
    const bSliderRef = useRef();

    function handleClick(event){
      
       event.target.classList.toggle("slide");

       props.handleOnOff(event.target.getAttribute("id"))
    }

    return(
    <div className="controls-container">
        <h4 style={{padding:0,margin:0}}>Power</h4>
       
        <div className="power-slider">
            <div className="p-slider" ref={pSliderRef} id="pSlider" onClick={handleClick}></div>
        </div>

        <div className="display">
        {props.power ?  props.keyName : ""}
        </div>

        <input type="range" min="1" max="100" className="slider" />

        <h4 style={{padding:0,margin:0}}>Bank</h4>
       
       <div className="power-slider">
          {props.power ? <div className="p-slider" onClick={handleClick} ref={bSliderRef} id="bSlider"></div> : <div className="p-slider"  ref={bSliderRef} id="bSlider"></div>} 
       </div>

    </div>)

}

export default Controls;