import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Gym",
    description: "Lose Weight",
    completed: false
  },
  {
    title: "Study DSA",
    description: "Need to revise DSA for IBM Assessment",
    completed: false
  },
  {
    title: "Soneka",
    description: "etc etc etc..",
    completed: true
  }])

  function Addtodos() {
    setTodos([...todos, {
      title: "Some New stuff",
      description: "blah blah blah"
    }])
  }

  return (
    <>
      <button onClick={Addtodos}>Add a Random todo</button>
      {todos.map( (todo) => {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </>
  )
}

function Todo(props) {
  return <>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </>
}



export default App
