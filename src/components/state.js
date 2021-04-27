import React ,{useState} from "react";
import "../App.css";

//data storage
const StateComponent = () =>{
    //[accessVariable, updateFunction] = useState(initialValue);
    const [count, setCount] = useState(0);
    
    
    const incrementByOne = () => {
    setCount ((prevValue) => {
        if(prevValue >=10){
            window.alert("value exceed the upper limit");
            prevValue = 0;
            return prevValue
        }
        return prevValue + 1;
     
    });
};
    const decrementByOne = () => {
        setCount ((prevValue) => {
            if(prevValue <=0){
                window.alert("value exceed the lower limit");
                prevValue = 0;
                return prevValue;
            }
            return prevValue - 1;
        });
    };

   
    return(
    <div className ="container">
        <div>
            <h1 className ="head">{count}</h1>
        </div>    
        <div className = "btn">
          
            <button onClick = {incrementByOne} on className ="button1">Increment</button>
            <button onClick = {decrementByOne} on className ="button2">Decrement</button>
                
        </div>
    </div>    
    ); 
}

export default StateComponent;
