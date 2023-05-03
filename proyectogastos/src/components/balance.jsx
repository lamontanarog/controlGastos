import React from 'react'
import '../components/styles.css'

function Balance({totalBalance}) {
  return (
    <div className='father'>
        <h3>Your balance</h3>
        <h4>{totalBalance}</h4>
    </div>
  )
}

export default Balance