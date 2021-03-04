import React, { useContext } from 'react'
import { GlobalContext } from "./Context/GlobalState";


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    let sign = transaction.transactionAmount < 0 ? '-' : '+';
    return (
        <li className={transaction.transactionAmount > 0 ? 'plus' : 'minus'}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
