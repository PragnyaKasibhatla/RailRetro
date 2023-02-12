/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "./RestoMenu.css";
import "./toggle.css";
function RestoMenu(props){
    const { product, onAdd } = props;
    const [isAvailable,setAvailability] = useState({[props.item]:true});
    function handleChange(event){
        console.log(product);
        if(isAvailable[props.item]){
        setAvailability(prevSate=>(
            {
                ...prevSate,
                [props.item]: false
            }
            )
        );
        }
        else{
            setAvailability(prevSate=>(
                {
                    ...prevSate,
                    [props.item]: true
                }
                )
            );

        } 
    }
    return <div className="items">
        <div  className='restobox'>
        <span className="itemName">{props.item}</span>
        <br></br>
        <img alt={props.item} style={{"borderRadius":"50%","width":"200px","height":"200px"}} src={props.img}></img>
        <br></br>
        <label className="toggle">
            <input id="1" className="toggle-checkbox" type="checkbox" onChange={handleChange} defaultChecked></input>
                <div className="toggle-switch"></div>
                    <span style={{fontFamily:"sans-serif",fontSize:'24px'}}className="toggle-label">{isAvailable[props.item] ? "Available" : "Unavilable"}</span>
            </label>
        </div>
    </div>
}

export default RestoMenu;