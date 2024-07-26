import React,{useEffect, useState} from "react";
import Admin from "./components/Admin";
import List from "./components/List";
import Searchdata from "./UI/Searchdata";
import Totaldata from "./UI/Totaldata";
function App() {
  const[inputDetails,setInputDetails]=useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);
  const[name,setName]=useState("");
  const[number,setNumber]=useState("");
  const addHandler=(name,number)=>{
        setInputDetails((prevState) => {
            return [...prevState, { name: name, number: number, Id: Math.random().toString() }];
        });
        setFilteredDetails((prevState) =>[...prevState, { name: name, number: number, Id: Math.random().toString() }]);
    }
    
  const deleteHandler=(id)=>{
   const arr=inputDetails.filter((value)=>{
       return value.Id != id;
   })
    setInputDetails(arr);
    setFilteredDetails(arr);

  }

  const editHandler=(id,name,number)=>{
    setName(name);
    setNumber(number);
    console.log(name,number);
    deleteHandler(id);

  }
  const searchHandler=(value)=>{
    const num=inputDetails.filter((ele)=>{
      return ele.number.includes(value);
  })
  
  setFilteredDetails(num);

  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Movie Booking</h1>
      <Totaldata data={filteredDetails.length}/>
      <Searchdata onSearch={searchHandler}/>
      <div>
      <Admin onAddDetails={addHandler} name={name} number={number} inputData={inputDetails}/>
      </div>
      <h2>Details</h2>
      <List inputData={filteredDetails} onDelete={deleteHandler} onEdit={editHandler}/>
      
    </div>
  );
}

export default App;