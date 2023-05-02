import React from 'react';
import HistoryItem from './historyItem';
import '../components/styles.css'

function History({transaction}) {

  return (
    <div className='father'>
      <h3>Historial de transacciones</h3>
      <ul>
        {transaction && transaction.map((transaccion, index) => (
          <HistoryItem key={index} nombreGasto={transaccion.texto} costoGasto={transaccion.costo} />
        ))}
      </ul>
    </div>
  );
}

export default History;
