import React from 'react';
import HistoryItem from './historyItem';
import '../components/styles.css'

function History({transactions}) {

  return (
    <div className='father'>
      <h3>Historial de transacciones</h3>
      <ul>
        {transactions && transactions.map((transaccion, index) => (
          <HistoryItem key={index} nombreGasto={transaccion.texto} costoGasto={transaccion.costo} />
        ))}
      </ul>
    </div>
  );
}

export default History;
