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
    

    //Creamos una f asincronica, que empieza validando q si tenemos una expensa que supera a neustro balance total, le arroje una alerta avisandole
    //dicho problema
    async function enviarTransaction() {
        if(cost < 0 && Math.abs(cost) > totalBalance) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No posees dinero disponible en tu cuenta!',
                footer: '<a href="">Carga saldo para continuar con esta transaccion</a>'
            });
            //Si no hay problema con dicha validacion creamos la nueva transaccion, pasandole los valores que van a guardarse en la db
            //agregando un if ternario para saber que tipo de transaccion sera, y una fecha en la que dicha transaccion fue creada.
        } else {
            const newTransaction = {
                texto: text,
                costo: cost,
                tipo: cost > 0 ? 'incomes' : 'expenses',
                timestamp: new Date(),
            };
            // esperamos a la funcion addTransaction que viene desde el context y le pasamos como parametro nuestra newTransaction
            await addTransaction(newTransaction);
            setInputClear(true);
            
        }
    }

    //El useEffect se activa cuando los valores de text o cost cambian y actualiza el estado de isEmpty según si los campos están vacíos o no.
    useEffect(() => {
        setIsEmpty(text === '' || cost === '');
    }, [text, cost]);

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
