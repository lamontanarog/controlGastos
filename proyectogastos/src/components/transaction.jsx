import { useState } from 'react'
import '../components/styles.css'
import { useEffect } from 'react';
import "./styles.css"
import React, { useContext } from 'react';
import { ContextApp } from '../../Context/context';
import Swal from 'sweetalert2'


function Transaction() {
    //Utilizamos el hook useContext para acceder al contexto ContextApp, del cual extraemos las funciones addTransaction y totalBalance.
    const { addTransaction, totalBalance, user } = useContext(ContextApp);
    //text: guarda el valor del texto introducido en el input.
    const [text, setText] = useState("");
    //cost: guarda el valor del costo introducido en el input.
    const [cost, setCost] = useState('');
    //isEmpty: indica si los campos text y cost están vacíos.
    const [isEmpty, setIsEmpty] = useState(true);
    const [inputClear, setInputClear] = useState(false);
    //El useEffect se activa cuando los valores de text o cost cambian y actualiza el estado de isEmpty según si los campos están vacíos o no.
    useEffect(() => {
        setIsEmpty(text === '' || cost === '');
    }, [text, cost]);
    //La funcion enviarTransaction crea un nuevo objeto newTransaction con los valores de text y cost, 
    //verifica que el cost sea menor a cero para verificar que sea un expense y que sea mayor a mi balance total
    // para asi saber que debe mandar un mensaje de error
    // Luego llama a la función addTransaction pasando este objeto como argumento.
    // ademas agregamos el setInputClear y lo pasamos a true(ahora cuenta con la info de los input)
    function enviarTransaction() {
        const newTransaction = { texto: text, costo: cost,tipo:"" ,timestamp: new Date() };
        if (cost > 0) {
            newTransaction.tipo = "incomes";
        } else if(cost < 0) {
            newTransaction.tipo = "expenses";
        }
        if(cost < 0 && Math.abs(cost) > totalBalance) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No posees dinero disponible en tu cuenta!',
                footer: '<a href="">Carga saldo para continuar con esta transaccion</a>'
            })
        } else {
            addTransaction(newTransaction);
            setInputClear(true);
            
        }
    }
    useEffect(() => {
        if (inputClear) {
            setText('');
            setCost('');
            setInputClear(false);
        }
    }, [inputClear]);

    return (
        <>
            <div>
                <h1 className='h1tr'>Add new transaction</h1>
                <form className='footer'>
                    <label htmlFor="">Texto</label> <br />
                    <input type="text" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)} /> <br />
                    <label htmlFor="">Amount (Negative -expense, positive - income) </label> <br />
                    <input type="number" placeholder='Enter Amount' value={cost} onChange={(e) => setCost(e.target.value)} />
                    <button type='button' onClick={enviarTransaction} disabled={isEmpty}> add transaction</button>
                </form>
            </div>
        </>
    )
}

export default Transaction
