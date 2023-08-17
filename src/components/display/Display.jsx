import React from "react";
import "./Display.css";
const handleInputChange = (event) => {
  };
  
function Display(props){
    return(
        <input className="display" type="text" value={props.value} onChange={handleInputChange}></input>
    )
}

export default Display;