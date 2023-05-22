import { useState } from 'react'
import History from './history'
import '../components/styles.css'
import { useEffect } from 'react';
import "./styles.css"

function Transaction(props) {
    const [text, setText] = useState("");
    const [cost, setCost] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true)
    
    function pusheoArray() {
        const newTransaction = { texto: text, costo: cost };
            props.addTransaction(newTransaction);
    }

    useEffect(() =>
    {
        setIsEmpty(text === '' || cost === 0)
    },[text, cost])
    return (
        <> 
            <div>
            <h1 className='h1tr'>Add new transaction</h1>
            <form className='footer'>
                <label htmlFor="">Texto</label> <br />
                <input type="text" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)} /> <br />
                <label htmlFor="">Amount (Negative -expense, positive - income) </label> <br />
                <input type="number" placeholder='Enter Amount' value={cost} onChange={(e) => setCost(e.target.value)} />
                <button type='button' onClick={pusheoArray} disabled={isEmpty}> add transaction</button>
            </form>
            </div>
        </>
    )
}

export default Transaction
