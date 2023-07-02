import '../components/styles.css'


function HistoryItem(props) {

  const { nombreGasto, costoGasto } = props;
  const signo = costoGasto < 0 ? 'Gastaste -' : 'Recibiste +';
  
  return (
    <>
      <div className='itemsHistorial'> ◒ <span> {signo} ${Math.abs(costoGasto)}  </span> en {nombreGasto}  </div>
    </>
  )
}

export default HistoryItem
