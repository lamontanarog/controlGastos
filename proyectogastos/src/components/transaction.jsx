import { useState } from 'react'
import History from './history'
import '../components/styles.css'
import { useEffect } from 'react';
import "./styles.css"


function Transaction(props) {

    const [text, setText] = useState("");
    const [cost, setCost] = useState(0);
    
    function pusheoArray() {
        const newTransaction = { texto: text, costo: cost };
            props.addTransaction(newTransaction);
    }
    
    return (
        <> 
            <h1 className='h1tr'>Add new transaction</h1>
            <form className='footer'>
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
