import React,{useEffect, useState} from "react";
import Admin from "./components/Admin";
import List from "./components/List";
import Searchdata from "./UI/Searchdata";
import Totaldata from "./UI/Totaldata";
function App() {
  const[inputDetails,setInputDetails]=useState([]);
  const[name,setName]=useState("");
  const[number,setNumber]=useState("");
  const addHandler=(name,number)=>{
        setInputDetails((prevState) => {
            return [...prevState, { name: name, number: number, Id: Math.random().toString() }];
        });
    }
    
  const deleteHandler=(id)=>{
   const arr=inputDetails.filter((value)=>{
       return value.Id != id;
   })
    setInputDetails(arr);

  }

  const editHandler=(id,name,number)=>{
    setName(name);
    setNumber(number);
    console.log(name,number);
    deleteHandler(id);

  }
  const searchHandler=(value)=>{
    const num=inputDetails.filter((ele)=>{
      return ele.number===value;
  })
  console.log(num)
   setInputDetails(num);

  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Movie Booking</h1>
      <Totaldata data={inputDetails.length}/>
      <Searchdata onSearch={searchHandler}/>
      <Admin onAddDetails={addHandler} name={name} number={number} inputData={inputDetails}/>
      <h1>Products</h1>
      <List inputData={inputDetails} onDelete={deleteHandler} onEdit={editHandler}/>
      
    </div>
  );
}

export default App;