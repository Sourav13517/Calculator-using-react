
function Calculation(input) {
    try {
        let result = eval(input).toString();
        if(result==="Infinity"){
            return("Math Error!");
        }
        else if (result.length < 15) {
            return (result.substring(0, 14));
        }
        else {
            return (result);
        }
    }catch(err){
        return("Syntax Error!");
    }


}

export default Calculation;