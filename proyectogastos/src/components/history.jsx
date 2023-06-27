import HistoryItem from './historyItem';
import '../components/styles.css'
import React, { useContext } from 'react';
import { ContextApp } from '../../Context/context';
import { onSnapshot } from 'firebase/firestore';
import db from '../../firebase/firebase';
import { useEffect } from 'react';

function History() {
  // utilizamos el hook useContext para acceder al contexto ContextApp, del cual se extrae el estado transactions.
  const { transactions, totalBalance, currValue, totalIncome } = useContext(ContextApp);

  return (
    <div className='father'>
      <h3>Historial de transacciones</h3>
      {/* realizamos una verificación de que transactions exista (no sea nulo), si existe hace un mapeo de cada elemento dentro de transacctions */}
      <ul>
        {transactions && transactions.map((transaccion, index) => (

            <HistoryItem key={index} nombreGasto={transaccion.texto} costoGasto={transaccion.costo} />

        ))}
      </ul>
    </div>
  );
}

export default History;
