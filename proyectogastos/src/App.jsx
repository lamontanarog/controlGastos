import Header from "./components/header"
import Balance from "./components/balance"
import BalanceDetail from "./components/balanceDetail"
import History from "./components/history"
import Transaction from "./components/transaction"
import ProviderApp from './context';
import { useContext } from 'react';
import { ContextApp } from './context';


function App() {
  const { totalBalance, totalIncome, totalExpense, transactions, addTransaction } = useContext(ContextApp);
  return (
    <>
      <ProviderApp>
        <Header />
        <Balance totalBalance={totalBalance} incomes={totalIncome} expenses={totalExpense} />
        <BalanceDetail totalIncome={totalIncome} totalExpense={totalExpense} />
        <History transactions={transactions} />
        <Transaction addTransaction={addTransaction} />
      </ProviderApp>
    </>
  )
}

export default App
