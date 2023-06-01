import { useState } from 'react'
import Header from './Component/Header';
import BudgetTab from './Component/BudgetTab';
import ExpensesTab from './Component/ExpensesTab';
import AddExpense from './Component/AddExpense';
import ContextProvider from './Component/Storage/Context';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContextProvider>
     <Header/>
     <BudgetTab/>
     <ExpensesTab/>
     <AddExpense/>
     </ContextProvider>
    </>
  )
}

export default App
