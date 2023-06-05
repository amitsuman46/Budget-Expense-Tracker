import React, { useRef } from 'react'
import { useContext } from 'react';
import { budgetContext } from './Storage/Context';
const AddExpense = () => {

    const context = useContext(budgetContext);
    const dispatch = context.reducerFunction;
    const nameref = useRef();
    const valueRef = useRef();
    const addExpense = (event) => {
        event.preventDefault();
        console.log("Hello");
        console.log(nameref.current.value+" "+ valueRef.current.value);
        dispatch({type:"ADD", payload: {key: Math.random(),name: nameref.current.value, cost: valueRef.current.value}});
    }
  return (
    <>
    <h1>Add Expense</h1>
    <form onSubmit={addExpense}>
    <div style={{display:"flex"}}>
        <div style={{marginLeft:"20px"}}>
            <label htmlFor='Name'>Name        </label>
            <input type="text" id="name" ref={nameref}/>
        </div>
        <div style={{marginLeft:"20px"}}>
            <label htmlFor='Cost'>Cost          </label>
            <input type="number" id="cost" ref={valueRef}/>
        </div>
       
    </div>
    <div style={{marginLeft:"7%", paddingTop:"5px"}}> <button style={{margin:"auto"}}>Add Expense</button></div>
    </form>
    </>
  )
}

export default AddExpense