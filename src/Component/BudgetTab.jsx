import React from 'react'
import Expenditure from './Expenditure.jsx';
import Budget from './Budget.jsx';
import Remaining from './Remaining.jsx';

const BudgetTab = () => {
  return (
    <div style={{display: "flex", justifyContent: 'space-around'}}>
        <Budget/>
        <Expenditure/>
        <Remaining/>
    </div>
  )
}

export default BudgetTab