import Header from "./components/header"
import Balance from "./components/balance"
import BalanceDetail from "./components/balanceDetail"
import History from "./components/history"
import Transaction from "./components/transaction"
import {useState} from "react"

function App() {
//   const [transactions, setTransactions] = useState([])

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
// }
var transactions = []
  return (
    <>
    <Header/>
    <Balance/>
    <BalanceDetail/>
    <History transactions={transactions}/>
    <Transaction transactions={transactions}/>
    </>
  )
}

export default App
