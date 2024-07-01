import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos") //backend URL
  .then(async function(res){
    const data = await res.json();
    setTodos(data.todos);
  })
  
  return (
    <>
     <CreateTodo></CreateTodo>
     <Todos todos={todos}></Todos>
    </>
  )
}


export default App
