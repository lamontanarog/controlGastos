import React from 'react'
import '../components/styles.css'


function BalanceDetail(props) {

    // const { income, expense } = props

    // function recorrerIncome() {
    //     {
    //         income.length > 0 && (
    //             <div>
    //                 Ingresos:
    //                 <ul>
    //                     {income.map((item, index) => (
    //                         <li key={index}>${item}</li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         )
    //     }
    // }

    // function recorrerExpense() {
    //     {
    //         expense.length > 0 && (
    //             <div>
    //                 Gastos:
    //                 <ul>
    //                     {expense.map((item, index) => (
    //                         <li key={index}>-${Math.abs(item)}</li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         )
    //     }
    // }
    return (
        <>
            <div className='father'>
                <h3>Income</h3>
                {/* <p>{recorrerIncome}</p> */}
            </div>
            <div className='father'>
                <h3>expense</h3>
                {/* <p>{recorrerExpense}</p> */}
            </div>
        </>
    )
}

export default BalanceDetail