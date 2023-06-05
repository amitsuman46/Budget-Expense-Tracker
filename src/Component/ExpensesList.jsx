import React, { useContext } from 'react'
import ExpensesListItem from './ExpensesListItem'
import  {budgetContext} from './Storage/Context'

const Dummy_array =[{
    activity:'shopping', amount:60
},{
    activity:'sex', amount:604
},{
    activity:'Transportation', amount:90
},{
    activity:'Food', amount:900
}]
const ExpensesList = () => {
  const context = useContext(budgetContext);
  return (
    <ul style={{marginLeft:'0px', padding:'0px'}}>     
    {context.state.expenses.map((array)=>(<ExpensesListItem id={array.key} activity={array.name} amount={array.cost}/>))}
    </ul>
  )
}

export default ExpensesList