import { useState } from 'react'
import History from './history'


function Transaction() {

    const [text, setText] = useState("");
    const [cost, setCost] = useState(0);
    const [transaction, setTransaction] = useState([])

    

    function pusheoArray() {
        const newTransaction = [...transaction, { texto: text, costo: cost }];
        setTransaction(newTransaction);
    }
    


    return (
        <>
        
    <History transaction={transaction} />
            <h1>Add new transaction</h1>

            <form>
                <label htmlFor="">Texto</label>
                <input type="text" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)} />
                <label htmlFor="">Amount (Negative -expense, positive - income) </label>
                <input type="number" placeholder='Enter Amount' value={cost} onChange={(e) => setCost(e.target.value)} />
                <button type='button' onClick={pusheoArray}> add transaction</button>
            </form>

        </>
    )
}

export default Transaction
