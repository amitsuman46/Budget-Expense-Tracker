import React from 'react'
import { useContext } from 'react';
import { budgetContext } from './Storage/Context';
const AddExpense = () => {

    const context = useContext(budgetContext);
    const dispatch = context.reducerFunction;
    const addExpense = (event) => {
        event.preventDefault();
        console.log("Hello");
        dispatch();
    }
  return (
    <>
    <h1>Add Expense</h1>
    <form onSubmit={addExpense}>
    <div style={{display:"flex"}}>
        <div style={{marginLeft:"20px"}}>
            <label htmlFor='Name'>Name        </label>
            <input type="text" id="name"/>
        </div>
        <div style={{marginLeft:"20px"}}>
            <label htmlFor='Cost'>Cost          </label>
            <input type="text" id="cost"/>
        </div>
       
    </div>
    <div style={{marginLeft:"7%", paddingTop:"5px"}}> <button style={{margin:"auto"}}>Add Expense</button></div>
    </form>
    </>
  )
}

export default AddExpense