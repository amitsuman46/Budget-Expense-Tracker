import React from 'react'
import ExpensesList from './ExpensesList'
const ExpensesTab = () => {
  return (
    <>
      <div className='Expenses'>
        <h2>Expenses</h2>
        <input style={{width:"80%", height:"30px"}} type="text" placeholder='Type to search'/>   
        <ExpensesList/>
      </div>
    </>
  )
}

export default ExpensesTab