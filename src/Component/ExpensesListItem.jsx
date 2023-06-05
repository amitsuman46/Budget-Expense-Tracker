import React from 'react'
import './ExpensesListItem.css'
import { useContext } from 'react';
import { budgetContext } from './Storage/Context';
const ExpensesListItem = (props) => {
  const context = useContext(budgetContext);
  const dispatch = context.reducerFunction;
  const removeExpense = () => {
    dispatch({type:"REMOVE", payload: props.id})  
  }
  return (
    <li>
        <div style={{display:'flex',borderBottom:"1px solid gray", marginBottom:"10px"}}>
            <span id='activity'>{props.activity}</span>
            <div style={{background:"lightpink", textAlign:"center", borderRadius:"32px"}}>
                <span id='amount'>Rs. {props.amount}</span></div>
            <button style={{borderRadius:'100%', background:'lightblue', position:"absolute", right:"30px"}}
            onClick={removeExpense}>X</button>
        </div>
    </li>
  )
}

export default ExpensesListItem