import { useState, useEffect } from 'react'
import '../components/styles.css';
import React, { useContext } from 'react';
import { ContextApp } from '../../Context/context';


function Balance() {
  //Dentro del componente, se utiliza el hook 
  //useContext para acceder al contexto ContextApp, del cual se extraen los estados totalBalance, expenses e incomes.
  const { totalBalance } = useContext(ContextApp);

  return (
    <>
      <h1 className='h1tr'>Tu balance</h1>
      <h2 className='h1tr'>{totalBalance}</h2>
    </>
  )
}

export default Balance;
