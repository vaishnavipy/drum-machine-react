

function UsehandleClick(obj,event){
       const {power,volume,handleKeyNameChange} = obj;
    if(power) { 
        event.target.children[0].volume = volume/100;
        event.target.children[0].play() 
    }
  
    event.target.style.backgroundColor ="#FEA500";
    event.target.style.boxShadow ="none";

    setTimeout(function(){ 
        event.target.style.backgroundColor ="#808080";
        event.target.style.boxShadow ="3px 3px 5px black";
    
        },200)

    handleKeyNameChange(event.target.id);
} 

export default UsehandleClick;