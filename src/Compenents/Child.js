import React, { useContext, useState } from 'react'
import './child.css'
import {TransactionContext} from '../transContext'

const Child = () => {

    const {transactions , addTransaction} = useContext(TransactionContext)
    const [amount, setamount] = useState(0);
    const [description, setdescription] = useState("")



    const handleSubmit =(e) =>{
        e.preventDefault();
        addTransaction({
            amount:Number(amount),
            description:description
        })
    }

    const getamount =(e)=>{
        setamount(e.target.value)
    }
    const getdescription = (e)=>{
        setdescription(e.target.value)
    }

  const getincome = () =>{
      let income = 0 ;
      for(var i = 0 ; i<transactions.length; i++){
          if(transactions[i].amount > 0)
              income += transactions[i].amount;
          
      }
      return income;
  }

  const getexpense = () =>{
      let expense = 0;
      for(var i =0 ; i<transactions.length; i++){
          if(transactions[i].amount<0)
              expense += transactions[i].amount;
      }
      return expense;
  }

    return (
        <div className="main_compoenent">
            <h2 className="main">Expense Tracker</h2> <br></br>
            <div className="balance_container">
                <h4>Current Amount </h4>
                <h2>{getincome() + getexpense()}</h2>
            </div>
            <div className="expense_container">

                <h4 className="income">INCOME <br></br>{getincome()} </h4>
                <h4 className="expense">EXPENSE <br></br>{getexpense()}</h4>
            </div>
            <br></br>
            <div className="history">
                <h4>History</h4>
                <hr></hr>
                <ul className="history_list">
                    {transactions.map((trans, index) => {
                        return (
                            <li key={index}>
                                <span>{trans.description}</span>
                                <span>{trans.amount}</span>
                            </li>
                        )
                    })}
                </ul>


            </div>

            <div className="transaction">
                <h4>Add Transaction</h4>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <label>Text</label><br></br>
                    <input type="text" required onChange={getdescription}></input>
                    <br></br>
                    <label>Amount</label><br></br>
                    <input type="text" onChange={getamount}></input>

                    <input type="submit"></input>
                </form>

                


            </div>

        </div>
    )
}

export default Child
