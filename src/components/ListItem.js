import React from "react";
import "./ListItem.css";
const ListItem=(props)=>{
const deleteHandler=()=>{
    props.delHandler(props.id);
    console.log(props.id);
}
const editHandler=()=>{
    props.editHandler(props.id,props.name,props.number);
}
return(
      <div>
        {props.name}{"   "}{props.number}
        <button  type="button" onClick={deleteHandler}>Delete</button>
        <button  type="button" onClick={editHandler}>Edit</button>
      </div>
)
}
export default ListItem;