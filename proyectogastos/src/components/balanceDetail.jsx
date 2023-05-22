import React from 'react'
import '../components/styles.css'


function BalanceDetail(props) {
    const { totalIncome, totalExpense } = props
    return (
        <>
        <container className='contenedor-padre'>
            <div className='contenedor-incomes'>
                <h3>incomes</h3>
                <h3>Total: ${totalIncome}</h3>
            </div>
            <div className='contenedor-expenses'>
                <h3>expenses</h3>
                <h3>Total: ${totalExpense}</h3>
            </div>
            </container>
        </>
    )
}

export default BalanceDetail