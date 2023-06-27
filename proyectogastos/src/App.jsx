import Header from "./components/header";
import Balance from "./components/balance";
import BalanceDetail from "./components/balanceDetail";
import History from "./components/history";
import Transaction from "./components/transaction";
import ProviderApp from "../Context/context";
import { useContext } from "react";
import { ContextApp } from "../Context/context";
import CrearCuenta from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import IniciarSesion from "./components/inicio";
import { AuthContext, AuthProvider } from "../Context/AuthContext";

function App() {
  const BaseApp = () => {
    const {totalBalance,totalIncome,totalExpense,transactions,addTransaction} = useContext(ContextApp);
    return (
      <ProviderApp>
        <Header />
        <Balance
          totalBalance={totalBalance}
          incomes={totalIncome}
          expenses={totalExpense} />
        <BalanceDetail totalIncome={totalIncome} totalExpense={totalExpense} />
        <History transactions={transactions} />
        <Transaction addTransaction={addTransaction} />
      </ProviderApp>
    );
  };

  return (
    <>
      { 
      <AuthProvider>
        <Routes>
          !user ?
          <Route path="/CreateAcount" element={<CrearCuenta />} />
          <Route path="/Login" element={<IniciarSesion />} />
          : <Route path="/" element={BaseApp()} />;
        </Routes>
        </AuthProvider>
      }
      
    </>
  );
}

export default App;
