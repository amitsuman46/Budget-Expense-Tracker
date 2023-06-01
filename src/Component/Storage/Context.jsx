import { createContext, useReducer } from "react";

export const budgetContext = createContext();
const reducerFunction = (state, action) => {
    if(action.type==='ADD')
    {
        return {...state,expenses:[...state.expenses, action.payload]}
    }
    return state;
}
 const ContextProvider = (props) => {
    const initialState = {budget:5000, expenses: [{name:'Test',cost:200} ]};
    
    const [state, budgetDispatch] = useReducer(reducerFunction, initialState);

    return (<budgetContext.Provider value={{state:state, reducerFunction:reducerFunction}}>
        {props.children}
    </budgetContext.Provider>)
}
export default ContextProvider;

