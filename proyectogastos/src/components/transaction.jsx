import { useState } from 'react'
import '../components/styles.css'
import { useEffect } from 'react';
import "./styles.css"
import React, { useContext } from 'react';
import { ContextApp } from '../context';

function Transaction() {

    //Utilizamos el hook useContext para acceder al contexto ContextApp, del cual extraemos las funciones addTransaction y totalBalance.
    const { addTransaction, totalBalance } = useContext(ContextApp);
    //text: guarda el valor del texto introducido en el input.
    const [text, setText] = useState("");
    //cost: guarda el valor del costo introducido en el input.
    const [cost, setCost] = useState(0);
    //isEmpty: indica si los campos text y cost están vacíos.
    const [isEmpty, setIsEmpty] = useState(true);
    //showErrorMessage: determina si se debe mostrar un mensaje de error.
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    //El useEffect se activa cuando los valores de text o cost cambian y actualiza el estado de isEmpty según si los campos están vacíos o no.
    useEffect(() => {
        setIsEmpty(text === '' || cost === 0)
    }, [text, cost])
    
    //El useEffefect se activa cuando el valor de totalBalance cambia y actualiza el estado de showErrorMessage según si el saldo total es igual a cero o no.
    useEffect(() => {
        setShowErrorMessage(parseFloat(totalBalance) === 0);
    }, [totalBalance]);

    //La funcion pusheoArray crea un nuevo objeto newTransaction con los valores de text y cost, y luego llama a la función addTransaction pasando este objeto como argumento.
    function pusheoArray() {
        const newTransaction = { texto: text, costo: cost };
        addTransaction(newTransaction);
    }
    return (
        <>
            <div>
                <h1 className='h1tr'>Add new transaction</h1>
                <form className='footer'>
                    <label htmlFor="">Texto</label> <br />
                    <input type="text" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)} /> <br />
                    <label htmlFor="">Amount (Negative -expense, positive - income) </label> <br />
                    <input type="number" placeholder='Enter Amount' value={cost} onChange={(e) => setCost(e.target.value)} />
                    {parseFloat(totalBalance === 0) ? ((<button type='button' onClick={pusheoArray} disabled> add transaction</button>)) :
                    (<button type='button' onClick={pusheoArray} disabled={isEmpty}> add transaction</button>)}
                    {showErrorMessage && parseFloat(totalBalance === 0) ? (<p> No hay saldo disponible</p>) : 
                    showErrorMessage}
                    
                </form>
            </div>
        </>
    )
}

export default Transaction
