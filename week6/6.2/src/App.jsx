import { useEffect, useMemo, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);
 

  let count = useMemo(()=>{
    console.log("Change Occured")
  let finalCount = 0
  for (let i = 0; i <= input; i++) {
    finalCount = finalCount + i
  }
    return finalCount;
  }, [input])

  return (
    <>
      <input type='text' placeholder='Enter a number'
        onChange={(e) => {
          setInput(e.target.value)
        }}></input>

      <p>Sum from 1 to {input} is {count}</p>
      
      <button onClick={()=>{setCounter(counter+1)}}>Count is {counter}</button>
    </>
  )

}



export default App


 // const [finalVal, setFinalVal] = useState(0)

  // useEffect(()=>{
  //   console.log("Change occured")
  // let count = 0
  // for (let i = 0; i <= input; i++) {
  //   count = count + i
  // }
  //   setFinalVal(count);
  // }, [input])