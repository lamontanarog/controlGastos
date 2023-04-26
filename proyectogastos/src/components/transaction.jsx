import React from 'react'

function Transaction() {
    
    return (
        <>
            <h1>Add new transaction</h1>
            <form>
                <label htmlFor="">Texto</label>
                <input type="text" id='textito' placeholder='Enter text' />
                <label htmlFor="">Amount (Negative -expense, positive - income) </label>
                <input type="number" id="" placeholder='Enter Amount' />
                <button type='button'> add transaction</button>
            </form>
        </>
    )
}

export default Transaction