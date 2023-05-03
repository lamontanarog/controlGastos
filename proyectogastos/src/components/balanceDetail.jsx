import React from 'react'
import '../components/styles.css'


function BalanceDetail(props) {
    const { totalIncome, totalExpense } = props

    return (
        <>
            <div className='father'>
                <h3>incomes</h3>
                <h3>Total: ${totalIncome}</h3>
            </div>
            <div className='father'>
                <h3>expenses</h3>
                <h3>Total: ${totalExpense}</h3>
            </div>
        </>
    )
}

export default BalanceDetail