import React, {useRef,useEffect,useState } from "react";
import "./Searchdata";
import InputData from "./InputData";
const Searchdata=(props)=>{
    const[searchValue,setSearchValue]=useState("");

    const numberChangeHandler = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        const timer=setTimeout(() => {
            props.onSearch(searchValue);
        }, 500);
        return ()=>{
            clearTimeout(timer);
    }, [searchValue, props.onSearch]});

    return(
<div>
<InputData
id="search"
type="number"
label="Find Slot: "
value={searchValue}
onChange={numberChangeHandler}
/>
</div>
    );
}
export default Searchdata;