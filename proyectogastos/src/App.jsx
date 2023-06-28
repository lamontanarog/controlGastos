import Header from "./components/header";
import Balance from "./components/balance";
import BalanceDetail from "./components/balanceDetail";
import History from "./components/history";
import Transaction from "./components/transaction";
import ProviderApp from "../Context/context";
import { useContext } from "react";
import { ContextApp } from "../Context/context";
import CrearCuenta from "./components/SignIn";
import { Routes, Route, useNavigate } from "react-router-dom";
import IniciarSesion from "./components/inicio";
import { AuthContext } from "../Context/AuthContext";
import AuthProvider from "../Context/AuthContext";

function App() {
const navigate = useNavigate();
  const { loginOut} = useContext(AuthContext);
  const { totalBalance, totalIncome, totalExpense, transactions, addTransaction } = useContext(ContextApp);
  
const BaseApp = () => {
  return (
        <>
        <button onClick={()=>{loginOut();navigate("/");alert("Sesion cerrada correctamente")}} >Sign Out</button>
        <Header />
        <Balance
          totalBalance={totalBalance}
          incomes={totalIncome}
          expenses={totalExpense} />
        <BalanceDetail totalIncome={totalIncome} totalExpense={totalExpense} />
        <History transactions={transactions} />
        <Transaction addTransaction={addTransaction} /></>
  );
};

  return (
    <AuthProvider>
      <ProviderApp>
      <Routes>
        <Route path="/CreateAcount" element={<CrearCuenta />} />
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/home" element={<BaseApp />} />;
      </Routes>
      </ProviderApp>
      </AuthProvider>
  );

}


export default App;
