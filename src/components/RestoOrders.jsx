import "./RestoOrders.css";
import { useState } from "react";
function RestoOrders(props) {
  const [label,setLabel] =useState(props.accept);
  function handleClick(event){
    if(label==="Accepted"){
      setLabel("Accept");
    }
    else{
      setLabel("Accepted");
    }
  }
  return (
    <div >
    <table id="customers">
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.orderId}</td>
          <td><span>{props.status}</span></td>
          <td><button onClick={handleClick} style={{backgroundColor: label==="Accepted" ? 'green' : 'red', width:"120px",height:"60px",fontSize:"24px"}}>{label}</button></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default RestoOrders;