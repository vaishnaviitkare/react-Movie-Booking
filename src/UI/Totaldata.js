import React from "react";
import "./Totaldata.css";
const Totaldata=(props)=>{
    return(
        <div className="total">
        <p>Total Booked:{props.data}</p>
        </div>

    );
}
export default Totaldata;