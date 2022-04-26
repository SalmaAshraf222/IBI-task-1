import React from "react"
import './App.css';
import dots from './images/icon-ellipsis.svg';



function Comp(props){
    return(
        
            <div >

 <div className="shadow2 " style={{backgroundColor: props.color}} >
<img src={props.image} className="icon"  /></div>


<div className="div2">
<img src={dots} className="dots"  />
  <h5>{props.name}</h5>
  <h1>{props.time}</h1>
  <h6>{props.last}</h6></div>


  </div>
        
       


    )
}

export default Comp;