import React from 'react'
import '../components/styles.css'


function BalanceDetail(props) {

    const { incomes, expenses } = props

    console.log("income", incomes)
    console.log("Expense", expenses)

    const totalIncome = incomes.map(Number).reduce((acc, curr) => acc + curr, 0);
    const totalExpense = expenses.map(Number).reduce((acc, curr) => acc + curr, 0);

    function RecorrerIncomes() {
        {
            incomes.length > 0 && (
                <div>
                    Ingresos:
                    <ul>
                        {incomes.map((item, index) => (
                            <li key={index}>${item}</li>
                        ))}
                    </ul>
                </div>
            )
        }
    }

    function RecorrerExpenses() {
        {
            expenses.length > 0 && (
                <div>
                    Gastos:
                    <ul>
                        {expenses.map((item, index) => (
                            <li key={index}>-${Math.abs(item)}</li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
    console.log("incomes", incomes)
    console.log("Expenses", expenses)
    return (
        <>
            <div className='father'>
                <h3>incomes</h3>
                <RecorrerIncomes />
                <h3>Total: ${totalIncome}</h3>
            </div>
            <div className='father'>
                <h3>expenses</h3>
                <RecorrerExpenses />
                <h3>Total: ${totalExpense}</h3>
            </div>
        </>
    )
}

export default BalanceDetail