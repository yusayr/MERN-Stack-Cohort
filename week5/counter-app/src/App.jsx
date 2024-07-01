import { useState } from 'react' //Used to define all states.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(2)
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <SquareValue value={value} setValue={setValue}></SquareValue>
    </div>

  )
}
//a component 
function CustomButton({ count, setCount }) {
  function counter() {
    setCount(count + 1);
  }
  return <button onClick={counter}>
    Counter {count}
  </button>
}

//component that squares the value upon click 
function SquareValue(prop) {
  function square() {
    prop.setValue(prop.value ** 2);
  }

  return <div>
    <button onClick={square}>Squared Value: {prop.value}</button>
    <p>Hello Buddy!</p>
  </div>
}

export default App
