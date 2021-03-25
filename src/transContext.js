import React, { createContext, useReducer } from "react"
import TransReducer from './TransREducer';

let initialtransaction = [
    { amount: 5000, description: "party" },
    { amount: 100, description: "grocery" },
    { amount: 348, description: "school fee" }
]

export const TransactionContext = createContext(initialtransaction);

export const TransactionProvider = ({children}) =>{
    const [state, dispatch] = useReducer(TransReducer, initialtransaction)

    function addTransaction(transobj){
        dispatch({
            type: "ADD",
            payload:{
                amount:transobj.amount,
                description:transobj.description
            }
        })

    }
    return(
        <TransactionContext.Provider value={{
            transactions : state,
            addTransaction

        }}>
            {children}

        </TransactionContext.Provider>
    )
}