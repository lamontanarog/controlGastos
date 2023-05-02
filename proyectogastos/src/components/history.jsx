import React from 'react';
import HistoryItem from './historyItem';

function History({transaction}) {

  return (
    <>
      <h3>Historial de transacciones</h3>
      <ul>
        {transaction && transaction.map((transaccion, index) => (
          <HistoryItem key={index} nombreGasto={transaccion.texto} costoGasto={transaccion.costo} />
        ))}
      </ul>
    </>
  );
}

export default History;
