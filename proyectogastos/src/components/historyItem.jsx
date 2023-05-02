import { useState, useEffect } from 'react'
import BalanceDetail from './balanceDetail';
import '../components/styles.css'


function HistoryItem(props) {

  const { nombreGasto, costoGasto } = props;
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const signo = costoGasto < 0 ? 'Gastaste -' : 'Ganaste +';

  function pusheoIncome() {
    setIncome([...income, costoGasto]);
  }
  function pusheoExpense() {
    setExpense([...expense, costoGasto]);
  }
  useEffect(() => {
    if (costoGasto > 0) {
      pusheoIncome();
    } else {
      pusheoExpense();
    }
  }, [costoGasto])

  return (
    <>
      <div>en: {nombreGasto}  <span> {signo} ${Math.abs(costoGasto)}  </span> </div>
    </>
  )
}

export default HistoryItem
