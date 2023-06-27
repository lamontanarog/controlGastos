import HistoryItem from './historyItem';
import '../components/styles.css'
import React, { useContext } from 'react';
import { ContextApp } from '../../Context/context';
import { onSnapshot, collection, query, orderBy, where } from 'firebase/firestore';
import db from '../../firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';

function History() {
  // utilizamos el hook useContext para acceder al contexto ContextApp, del cual se extrae el estado transactions.
  const { currentUserUid } = useContext(ContextApp);
  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{
    const q = query(collection(db, 'usuarios', currentUserUid, 'transacciones'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot)=>{
      const updatedTransactions = snapshot.docs.map((doc) => doc.data());
      setTransactions(updatedTransactions);
    });
    return()=> unsubscribe();
  },[currentUserUid]);

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
