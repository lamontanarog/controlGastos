import '../components/styles.css'


function HistoryItem(props) {

  const { nombreGasto, costoGasto } = props;
  const signo = costoGasto < 0 ? 'Gastaste -' : 'Ganaste +';

  return (
    <>
      <div>en: {nombreGasto}  <span> {signo} ${Math.abs(costoGasto)}  </span> </div>
    </>

  )
}

export default HistoryItem
