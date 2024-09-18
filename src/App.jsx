import React from 'react'
import Usememo from './usememo/usememo'
import ExpensiveCalculation from './usememo/usememo2'

const App = () => {
  return (
    <div>
      <Usememo/>
      <ExpensiveCalculation/>
    </div>
  )
}

export default App
