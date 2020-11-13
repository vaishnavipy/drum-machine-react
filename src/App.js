
import './App.css';
import React,{useState} from "react";
import useBoard from "./useBoard"

import Controls from "./controls"
import HeaterKeyboard from "./heaterKeyboard"
import PianoKeyboard from './pianoKeyboard';

function App() {

  const [keyNames,setKeyNames] = useState("");
  const [bgColor] = useState("#808080");
  const [power,setPower] = useState(true) ;
  const [boardType,setBoardType] = useState("Heater");
  const [volume,setVolume] = useState(50);
  

  const [boardArray1,boardArray2] = useBoard();

 function handleKeyNameChange(keyID){
    let keyName ;
    boardType == "Heater" ?   keyName = boardArray1[keyID].id :  keyName = boardArray2[keyID].id ;
    setKeyNames(keyName);

  }
  function handleOnOff(id){

      if(id == "pSlider" ){

        setPower(prevState => !prevState);

      }

      if(id == "bSlider"){
        boardType == "Heater" ?  setKeyNames("Smooth Piano Kit") : setKeyNames("Heater Kit");
        setBoardType(prevState => prevState == "Heater" ? "Piano" : "Heater")
        
      }

  }

  function handleVolumeChange(volume){
    setVolume(volume)
    setKeyNames(`Volume:${volume}`)

  }
  

  return (
    <div  className="logo">
     <span style={{fontSize: 25}} > DRUM MACHINE </span>
    <div className="main-container">
      {
        boardType == "Heater" ? 
                <HeaterKeyboard handleKeyNameChange={handleKeyNameChange} bgColor={bgColor} power={power} volume={volume}/> :
                <PianoKeyboard handleKeyNameChange={handleKeyNameChange} bgColor={bgColor} power={power} volume={volume}/> 
      } 
       <Controls keyName={keyNames} handleOnOff={handleOnOff} power={power} handleVolumeChange={handleVolumeChange}/>
     
    </div>
    </div>
    
  );
}

export default App;
