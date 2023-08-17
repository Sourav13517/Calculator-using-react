import React, { useState } from "react";
import decimal from "decimal.js";
import "./Frame.css";
import Display from "../display/Display";
import Buttom from "../buttom/Buttom";
import Minidisplay from "../mini-display/MiniDisplay";
import Calculation from "../../logic/Calculation";
function Frame() {
    const oper = ["+", "-", "*", "/", "%"];
    let [rawData, setRawData] = useState("");
    let [preData, setPreData] = useState(null);
    let [textResult, setTextResult] = useState("0");
    let [miniDisplayContent, setMiniDisplay] = useState("Math in your hands!");
    let [firstClick, setFirstClick] = useState(true);
    let [previousResult, setPreviousResult] = useState(0);
    let result = 0;
    function handleOnclick(buttomName) {
        if (buttomName === "=") {
            result = Calculation(rawData);
            setMiniDisplay(miniDisplayContent = textResult + "=");
            setTextResult(result);
            setFirstClick(true);
            setPreviousResult(result);
            setRawData("");
            setPreData(null);
        }
        else if (buttomName === "AC") {
            setTextResult("0");
            setMiniDisplay("Math in your hands!");
            setRawData("");
            setFirstClick(true);
            setPreData(null);
            setPreviousResult(0);
        }
        else if (buttomName === "Del") {
            if (textResult === "Math Error!" || textResult === "Syntax Error!") {
                setTextResult("");
                setPreviousResult(null);
                setRawData("");
            }
            else {
                setTextResult(textResult.slice(0, -1));
            }

        }
        else if (buttomName === "%") {
            if (firstClick) {
                let per = new decimal(previousResult).dividedBy(100);
                previousResult = per;
                setMiniDisplay(textResult + "%" + "=");
                textResult = "";
                setTextResult(previousResult);
                setPreData(buttomName);
                setPreviousResult(previousResult);
                setFirstClick(true);
                setRawData("");
            }
            else if (buttomName != preData) {
                let per = new decimal(rawData).dividedBy(100);
                setMiniDisplay(textResult + "%" + "=");
                setRawData(per);
                setTextResult(per);
                setPreData(buttomName);
                setPreviousResult(per);
            }
        }
        else if (buttomName === "Ans") {
            if (preData != buttomName) {
                if (firstClick) {
                    setFirstClick(false);
                    setTextResult(textResult = "");
                    setRawData(rawData + previousResult);
                    setTextResult(textResult.concat(buttomName));
                    setPreData(buttomName);
                } else {
                    setRawData(rawData + previousResult);
                    setTextResult(textResult + buttomName);
                    setPreData(buttomName);
                }

            }
        }
        else {
            if (firstClick) {
                if (oper.includes(buttomName)) {
                    setRawData(previousResult + buttomName);
                    setTextResult("Ans" + buttomName);
                } else {
                    setTextResult(textResult = "");
                    setRawData(rawData + buttomName);
                    setTextResult(textResult.concat(buttomName));
                }
                setFirstClick(false);
                setPreData(buttomName);
            }
            else {
                if (preData != buttomName) {
                    setRawData(rawData + buttomName);
                    setTextResult(textResult + buttomName);
                    setPreData(buttomName);
                }
                else {
                    if (!oper.includes(preData)) {
                        setRawData(rawData + buttomName);
                        setTextResult(textResult + buttomName);
                        setPreData(buttomName);
                    }
                }
            }
        }
    }
    return (
        <div className="Frame">
            {/* <h1 style={{color:"red",size:"20px",margin:"0",}}>Calculator</h1> */}
            <div className="frame-display">
                <Minidisplay key={22} value={miniDisplayContent} />
                <Display key={21} value={textResult} />
            </div>
            <div className="frame-keypad">
                <div className="keypad">
                    <Buttom key={1}  name="AC" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)", }} />
                    <Buttom key={2}  name="Del" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)" }} />
                    <Buttom key={3}  name="%" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)", borderRadius: "25px" }} />
                    <Buttom key={4}  name="/" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)", borderRadius: "25px" }} />
                </div>
                <div className="keypad">
                    <Buttom key={5}  name="7" onClick={handleOnclick} />
                    <Buttom key={6}  name="8" onClick={handleOnclick} />
                    <Buttom key={7}  name="9" onClick={handleOnclick} />
                    <Buttom key={8}  name="*" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)", borderRadius: "25px" }} />
                </div>
                <div className="keypad">
                    <Buttom key={9}  name="4" onClick={handleOnclick} />
                    <Buttom key={10}  name="5" onClick={handleOnclick} />
                    <Buttom key={11}  name="6" onClick={handleOnclick} />
                    <Buttom key={12}  name="-" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)", borderRadius: "25px" }} />
                </div>
                <div className="keypad">
                    <Buttom key={13}  name="1" onClick={handleOnclick} />
                    <Buttom key={14}  name="2" onClick={handleOnclick} />
                    <Buttom key={15}  name="3" onClick={handleOnclick} />
                    <Buttom key={16}  name="+" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)", borderRadius: "25px" }} />
                </div>
                <div className="keypad">
                    <Buttom key={17}  name="Ans" onClick={handleOnclick} />
                    <Buttom key={18}  name="0" onClick={handleOnclick} />
                    <Buttom key={19}  name="." onClick={handleOnclick} />
                    <Buttom key={20}  name="=" onClick={handleOnclick} style={{ backgroundColor: "rgb(134 140 173)", borderRadius: "25px" }} />
                </div>
            </div>
        </div>
    )
}

export default Frame;