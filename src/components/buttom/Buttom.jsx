import React from "react";
import "./Buttom.css";
function Buttom(props){
    function handleOnclick(event){
        props.onClick(event.target.name);
    }
    // function handleOnclick(){
    //     test(props.name);
    // }
    return(
        <button name = {props.name} style = {props.style} className="buttom" onClick={handleOnclick}> {props.name}</button>
    )
}

export default Buttom;