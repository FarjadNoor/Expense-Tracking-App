import React, { useState, useContext } from 'react'
import { GlobalContext } from "./Context/GlobalState";


export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)

    const [description, setdescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
        setdescription('')
        setTransactionAmount('')
    }

    return (
        <div>
            <h3>
                Add New Transaction
            </h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' value={description} required placeholder='Detail of Transaction'
                        onChange={(e) => setdescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='transactionamount'>Transaction Amount</label>
                    <input type='text' id='transactionamount' value={transactionAmount} required placeholder='Enter Transaction Amount'
                        onChange={(e) => setTransactionAmount(e.target.value)} />

                </div>
                <button className='btn'>
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
