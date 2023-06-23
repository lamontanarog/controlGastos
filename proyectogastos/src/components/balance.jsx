import { useState, useEffect } from 'react'
import '../components/styles.css';
import React, { useContext } from 'react';
import { ContextApp } from '../context';


function Balance() {
  //Dentro del componente, se utiliza el hook 
  //useContext para acceder al contexto ContextApp, del cual se extraen los estados totalBalance, expenses e incomes.
  const { totalBalance, expenses, incomes } = useContext(ContextApp);
  //Se define un estado warningMessage utilizando el hook useState, que se inicializa como una cadena vacía.
  const [warningMessage, setWarningMessage] = useState('');

  //realizar una verificación cuando el valor de totalBalance cambie.Si el valor de expenses es mayor que el valor de incomes,
  // se establece un mensaje de advertencia en el estado warningMessage, y si no, simplemente queda como una cadena de texto vacia.
  useEffect(() => {
    if (expenses > incomes) {
      setWarningMessage(
        'Sorry, your current balance is negative. Please consider reducing expenses or increasing income.'
      )
    } else {
      setWarningMessage('')
    }
  }, [totalBalance])

  return (
    <>
      {warningMessage && <p className="warning">{warningMessage}</p>}
      <h1>Your balance</h1>
      <h2>{totalBalance}</h2>
    </>
  )
}

export default Balance;
