import React, { useContext, useState } from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    // console.log(context.transactions);
    console.log(transactions)

    return (
        <div>
            <h3>History</h3>
            <ul id="list" class="list">
                {
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }

            </ul>
        </div>
    )
}
