import React from 'react'
import Usememo from './usememo/usememo'
import ExpensiveCalculation from './usememo/usememo2'
import Useredu from './usereducer/hook'

const App = () => {
  return (
    <div>
      <Usememo/>
      <ExpensiveCalculation/>
      <Useredu/>
    </div>
  )
}

export default App
