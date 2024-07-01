import React, { useState } from 'react'
import './App.css'

//Wrappers
function App() {

  return <>
    <CardWrapper>
      Hi there
    </CardWrapper>
    <CardWrapper>
      Hello there
    </CardWrapper>
  </>

}


function CardWrapper({ children }) {
  return <div style={{
    border: "2px solid black", padding: 20, marginBottom: 10
  }}>
    {children}
  </div>
}


export default App
