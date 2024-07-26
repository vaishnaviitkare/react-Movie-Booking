import React,{useEffect,useState} from "react";
import InputData from "../UI/InputData";
import "./Admin.css";
const Admin=(props)=>{
    const[seatNumber,setSeatNumber]=useState("");
    const[userName,setName]=useState("");
    useEffect(() => {
      if (props.name.trim().length > 0 && props.number.toString().trim().length > 0) {
          console.log(props.name, props.number);
          setName(props.name);
          setSeatNumber(props.number);
      }
  }, [props.name, props.number]);

   const nameChangeHandler=(event)=>{
     setName(event.target.value);
   }
  const numberChangeHandler=(event)=>{
     setSeatNumber(event.target.value);
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    const numberExists = props.inputData.some((ele) => {
      return ele.number === seatNumber;
    });
      if(numberExists){
        alert("Already Booked");
        return;
       
      }
    props.onAddDetails(userName,seatNumber);
    setName("");
    setSeatNumber("");
    
  }
return(
    <React.Fragment>
         <form onSubmit={submitHandler} className="form">
            <div>
                <InputData
                 id="number"
                 type="number"
                 label="Seat Number:"
                 value={seatNumber}
                 onChange={numberChangeHandler}
                />{" "}
                <InputData
                 id="name"
                 type="text"
                 label="User Name:"
                 value={userName}
                 onChange={nameChangeHandler}
                />{" "}
                <button type="submit" >ADD</button>
            </div>
          </form>
          
          {/*<div>
           <h2>Total Value Worth of Products:</h2>
            <InputData
            id="total"
            label=""
            type="number"
            value={totalValue}
            onChange={totalChangehandler}
            />
          </div>*/}
    </React.Fragment>
)
}
export default Admin;