import React from "react";
import "./InputData.css";
const InputData=(props)=>{
    return(
       <React.Fragment className="input">
         <label htmlFor={props.id}>{props.label}</label>
         <input
         id={props.id}
         type={props.type}
         value={props.value}
         onChange={props.onChange}
         />
      </React.Fragment>
    );
}
export default InputData;