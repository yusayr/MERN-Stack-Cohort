import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//useRef hook is just another way of document.getElementByID
function App() {
  const myVariable = useRef(); //A hook to get reference to DOM elements

  useEffect(()=> {
    setTimeout(()=>{
       myVariable.current.innerHTML= 10;
    },5000)
  }, [])

  const incomeTax = 2000;

  return (
    <>
      Hi there, your income tax returns are <div ref={myVariable}>{incomeTax}</div>
    </>
  )
}

export default App
