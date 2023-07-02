import Header from "./components/header";
import Balance from "./components/balance";
import BalanceDetail from "./components/balanceDetail";
import History from "./components/history";
import Transaction from "./components/transaction";
import CrearCuenta from "./components/register";
import IniciarSesion from "./components/login";
import ProviderApp from "../Context/context";
import { useContext } from "react";
import { ContextApp } from "../Context/context";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import AuthProvider from "../Context/AuthContext";
import "./components/styles.css"
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

function App() {
  const navigate = useNavigate();
  const { loginOut } = useContext(AuthContext);
  const { totalBalance, totalIncome, totalExpense, transactions, addTransaction } = useContext(ContextApp);

  const BaseApp = () => {
    return (
      <>
        <Button className="buttonApp" variant="outline-primary" onClick={() => { loginOut(); navigate("/");  Swal.fire({
                    icon: 'success',
                    title: 'Done...',
                    text: 'Sesion cerrada correctamente.'
                }); }}>cerrar sesion</Button>
        <Header />
        <Balance
          totalBalance={totalBalance}
          incomes={totalIncome}
          expenses={totalExpense} />
        <BalanceDetail totalIncome={totalIncome} totalExpense={totalExpense} />
        <div className="grilla">
          <History transactions={transactions} />
          <Transaction addTransaction={addTransaction} />
        </div>
      </>
    );
  };
  return (
    <AuthProvider>
      <ProviderApp>
        <Routes>
          <Route path="/home" element={<BaseApp />} />
          <Route path="/CreateAcount" element={<CrearCuenta />} />
          <Route path="/" element={<IniciarSesion />} />
        </Routes>
      </ProviderApp>
    </AuthProvider>
  );

}


export default App;
