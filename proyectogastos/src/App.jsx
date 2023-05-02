import Header from "./components/header"
import Balance from "./components/balance"
import BalanceDetail from "./components/balanceDetail"
import History from "./components/history"
import Transaction from "./components/transaction"
import {useState} from "react"

function App() {
  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    if(transaction.costo > 0){
      setIncomes( (prevIncomes) => [...prevIncomes, transaction.costo]);
    } else{
      setExpenses( (prevExpenses) => [...prevExpenses,Math.abs(transaction.costo)]);
    }
}

  return (
    <>
    <Header/>
    <Balance/>
    <BalanceDetail incomes={incomes} expenses={expenses}/>
    <History transactions={transactions}/>
    <Transaction addTransaction={addTransaction}/>
    </>
  )
}

export default App
