import { useState, useEffect } from 'react'
import '../components/styles.css'

function Balance(props) {
  const { totalBalance, expenses, incomes } = props
  const [warningMessage, setWarningMessage] = useState('')

  useEffect(() => {
    if (expenses > incomes) {
      setWarningMessage(
        'Sorry, your current balance is negative. Please consider reducing expenses or increasing income.'
      )
    } else {
      setWarningMessage('')
    }
  }, [totalBalance])

  return (
    <>
      {warningMessage && <p className="warning">{warningMessage}</p>}
      <h1>Your balance</h1>
      <h2>{totalBalance}</h2>
    </>
  )
}

export default Balance
