import { addDoc, collection,query, orderBy, getDocs} from 'firebase/firestore';
import React, { createContext, useState, useEffect } from 'react';
import db, { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

//El contexto ContextApp se crea utilizando createContext() de React
// y se exporta para que pueda ser utilizado por los otros componentes.
export const ContextApp = createContext();
const ProviderApp = ({ children }) => {
    //Este va a ser un componente funcional que recibe como props a children que va a
    //representar los componentes hijos que van a ser envueltos por el context.
    const [userTransactions, setUserTransactions] = useState([]);
    const [userIncomes, setUserIncomes] = useState([]);
    const [userExpenses, setUserExpenses] = useState([]);
    const [user, setUser] = useState(null);
    const [currentUserUid, setCurrentUserUid] = useState(null);

    const fetchUserTransactions = async (uid) => {
        //Creamos una referencia a la base de datos dentro de la coleccion de usuario especifica con cada UID
        const userTransRef = collection(db, 'usuarios', uid, 'transacciones');
        //consultamos esa referencia para obtener los documentos de transacciones del usuario
        //Esperamos a que la base de datos nos devuelva los resultados de la consulta.
        const transSnapshot = await getDocs(query(userTransRef, orderBy('timestamp', 'desc')));
        //Creamos tres listas vacías: transactions, incomes y expenses. 
        //las usaremos más adelante para almacenar información sobre las transacciones del usuario.
        const transactions = [];
        const incomes = [];
        const expenses = [];

        //recorremos cada documento de transacción que recibimos de la base de datos. Por cada transacción,
        // creamos un objeto que contiene el ID del documento y todos los datos de la transacción.
        transSnapshot.forEach((doc) => {
            const transaction = {id: doc.id, ...doc.data()};
            //Agregamos ese objeto a la lista de transactions que creamos arriba con push
            transactions.push(transaction);
            if(transaction.costo > 0){
                //agregamos el costo actual a la lista de incomes si cumple la validacion
                incomes.push(transaction.costo);
            }else{
                //agregamos el costo actual a la lista de expenses.
                expenses.push(Math.abs(transaction.costo));
            }
        });
        //Para finalizar llenamos cada set con las listas que creamos en un principio. que nos va a servir para la logica mas adelante
        setUserTransactions(transactions);
        setUserIncomes(incomes);
        setUserExpenses(expenses);
    };
    // addTransaction se utiliza para agregar una nueva transacción al estado transactions. 
    const addTransaction = async (transaction) => {
        if (auth.currentUser) {
            const usuario = auth.currentUser;
            console.log("usuario", usuario.uid);
            
            await addDoc(collection(db, 'usuarios', usuario.uid, "transacciones"), transaction);
            await fetchUserTransactions(usuario.uid);
        } else {
            console.error('Usuario no valido');
        }
    };
        useEffect(()=>{
            onAuthStateChanged(auth,(user) =>{
                if (user){
                    setUser(user);
                    setCurrentUserUid(user.uid);
                    fetchUserTransactions(user.uid);
                }else{
                    setUser(null);
                    setCurrentUserUid(null);
                    setUserTransactions([]);
                    setUserIncomes([]);
                    setUserExpenses([]);
                }
            });
        },[]);
    // aqui mapeamos los incomes para que cada income se convierta en un numero si hay alguno que no sea numero al 100%
    // Despues utilizamos reduce para que el valor acumulador (acc) se sume con el valor actual (curr)
    // y le decimos que inicialice en 0 (acc = 0), asi en cada iteracion del map va a ir sumando los incomes y las expenses respectivamente
    const totalIncome = userIncomes.map(Number).reduce((acc, curr) => acc + curr, 0);
    const totalExpense = userExpenses.map(Number).reduce((acc, curr) => acc + curr, 0);
    const totalBalance = parseFloat(totalIncome - totalExpense).toFixed(2);

    //Envolvemos el "componente" children con el contexto ContextApp.Provider, proporcionamos los estados y funciones relevantes 
    //a través del atributo value. De esta manera, los componentes hijos que consuman este contexto tendrán acceso a ellos.

    return (
        <ContextApp.Provider value={{ userTransactions, addTransaction, totalBalance, userExpenses, userIncomes, totalIncome, totalExpense, user, currentUserUid }}>
            {children} </ContextApp.Provider>
    )
}

export default ProviderApp;