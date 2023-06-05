import { createContext, useReducer } from "react";

export const budgetContext = createContext();

const reducerFunction = (state, action) => {
    if(action.type==='ADD')
    {
        return {...state,expenses:[...state.expenses, action.payload]}
    }
    if(action.type==='REMOVE')
    {
        let newexpenses = state.expenses.filter((array)=>{return array.key!=action.payload})
        return {...state,expenses: newexpenses};
        // console.log(action.payload);
    }
    return state;
}
 const ContextProvider = (props) => {
    const initialState = {budget:5000, expenses: [{key:0,name:'Test',cost:200} ]};
    
    const [state, budgetDispatch] = useReducer(reducerFunction, initialState);

    return (<budgetContext.Provider value={{state:state, reducerFunction:budgetDispatch}}>
        {props.children}
    </budgetContext.Provider>)
}

export default ContextProvider;

