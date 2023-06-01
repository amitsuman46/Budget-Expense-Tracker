import React from 'react'
import './ExpensesListItem.css'
const ExpensesListItem = (props) => {
  return (
    <li>
        <div style={{display:'flex',borderBottom:"1px solid gray", marginBottom:"10px"}}>
            <span id='activity'>{props.activity}</span>
            <div style={{background:"lightpink", textAlign:"center", borderRadius:"32px"}}>
                <span id='amount'>Rs. {props.amount}</span></div>
            <button style={{borderRadius:'100%', background:'lightblue', position:"absolute", right:"30px"}}>X</button>
        </div>
    </li>
  )
}

export default ExpensesListItem