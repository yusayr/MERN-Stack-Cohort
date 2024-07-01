import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  

  return (
    <>
      <RevenueCard title={"Amount Pending"} amount={"3,245.23"} OrderCount={13}/>
    </>
  )
}

export default App
