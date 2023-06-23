import '../components/styles.css';
import React, { useContext } from 'react';
import { ContextApp } from '../context';

function BalanceDetail() {
    const { totalIncome, totalExpense } = useContext(ContextApp);
    return (
        <>
            <div className='contenedor-padre'>
                <div className='contenedor-incomes'>
                    <h3>incomes</h3>
                    <h3>Total: ${totalIncome}</h3>
                </div>
                <div className='contenedor-expenses'>
                    <h3>expenses</h3>
                    <h3>Total: ${totalExpense}</h3>
                </div>
            </div>
        </>
    )
}

export default BalanceDetail;
