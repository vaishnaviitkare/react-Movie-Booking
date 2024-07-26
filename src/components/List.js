import React from "react";
import "./List";
import ListItem from "./ListItem";
const List=(props)=>{
    const deleteHandler=(id)=>{
       props.onDelete(id);
    }
    const editHandler=(id,name,number)=>{
        props.onEdit(id,name,number);
      }
    return(
<ul>
    {
        props.inputData.map((value)=>{
           return (
            <li key={value.Id}>
           <ListItem
              delHandler={deleteHandler}
              editHandler={editHandler}
              id={value.Id}
              name={value.name}
              number={value.number}
           />
          </li>
           );
        })
    }
</ul>
    );
}
export default List;