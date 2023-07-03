import HistoryItem from './historyItem';
import '../components/styles.css'
import React, { useContext, useState, useEffect } from 'react';
import { ContextApp } from '../../Context/context';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import db from '../../firebase/firebase';

function History() {
  // utilizamos el hook useContext para acceder al contexto ContextApp, del cual se extrae el estado transactions.
  const { currentUserUid } = useContext(ContextApp);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'usuarios', currentUserUid, 'transacciones'), orderBy('timestamp', 'desc'));
    //creamos una const que contiene dentro una funcion nativa de fb que sirve para escuchar los cambios que ocurren dentro de una consulta 
    //a la colecccion db (en este caso seria el query que inicializamos arriba)
    const unsubscribe = onSnapshot(q, (snapshot) => { 
      //snapshot.docs actua como una lista de documentos que obtenemos de la base de datos, con el map recorremos esa lista
      // y traemos la informacion de doc, que sera guardada en updatedTransactions y luego pasara a ser el valor de Transactions.
      const updatedTransactions = snapshot.docs.map((doc) => doc.data());
      setTransactions(updatedTransactions);
    });
    //Una vez que dejamos de usar el componente, nos desuscribimos para evitar seguir recuperando datos innecesarios.
    return () => unsubscribe();

    //en este useEffect tenemos como dependencia el currentUserUid, lo que quiere decir que cada vez que cambie el usuario,
    // nuestra escucha cambiara(onSnapshot)
  }, [currentUserUid]);

  return (
      <div className='column-2'>
        <h3 className='tituloHistorial'>Historial de transacciones</h3>
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
