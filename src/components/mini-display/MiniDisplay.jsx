import React from "react";
import "./mini-display.css";

function Minidisplay(props){
    return(
        <div className="mini-display">
            {props.value}
        </div>
    )
}
export default Minidisplay;