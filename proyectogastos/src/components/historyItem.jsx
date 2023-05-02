import React from 'react'

function HistoryItem(props) {
  
    const { nombreGasto, costoGasto } = props;

    const signo = costoGasto < 0 ? 'Gastaste -' : 'Ganaste +';

    return (
        <li>
            en:{nombreGasto} <span> {signo} ${Math.abs(costoGasto)}</span>
        </li>
    )
}

export default HistoryItem
