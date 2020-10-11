import React, { useState } from 'react'


export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setamount] = useState(0);


    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div class="form-control">
                    <label for="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                     </label>
                    <input type="number"
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button class="btn">Add Transaction</button>
            </form>
        </>
    )
}
