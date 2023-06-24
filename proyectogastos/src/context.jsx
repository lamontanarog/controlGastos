import React, { createContext, useState } from 'react';
//El contexto ContextApp se crea utilizando createContext() de React
// y se exporta para que pueda ser utilizado por los otros componentes.
export const ContextApp = createContext();
const ProviderApp = ({ children }) => {
    //Este va a ser un componente funcional que recibe como props a children que va a
    //representar los componentes hijos que van a ser envueltos por el context.
    const [transactions, setTransactions] = useState([]);
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [currValue, setCurrValue] = useState(0)

    // addTransaction se utiliza para agregar una nueva transacción al estado transactions. 
    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
        if (transaction.costo > 0) {
            setIncomes((prevIncomes) => [...prevIncomes, transaction.costo]);
        } else {
                // Se utiliza Math.abs() para obtener el valor absoluto en caso de que sea un gasto negativo.
                    setExpenses((prevExpenses) => [...prevExpenses, Math.abs(transaction.costo)]);
            }
    }
    // aqui mapeamos los incomes para que cada income se convierta en un numero si hay alguno que no sea numero al 100%
    // Despues utilizamos reduce para que el valor acumulador (acc) se sume con el valor actual (curr)
    // y le decimos que inicialice en 0 (acc = 0), asi en cada iteracion del map va a ir sumando los incomes y las expenses respectivamente
    const totalIncome = incomes.map(Number).reduce((acc, curr) => acc + curr, 0);
    const totalExpense = expenses.map(Number).reduce((acc, curr) => acc + curr, 0);
    const totalBalance = parseFloat(totalIncome - totalExpense).toFixed(2);
    //Envolvemos el "componente" children con el contexto ContextApp.Provider, proporcionamos los estados y funciones relevantes 
    //a través del atributo value. De esta manera, los componentes hijos que consuman este contexto tendrán acceso a ellos.
    return (
        <ContextApp.Provider value={{ transactions, addTransaction, totalBalance, expenses, incomes, totalIncome, totalExpense, setCurrValue, currValue }}>
            {children} </ContextApp.Provider>
    )
}

    export default ProviderApp;