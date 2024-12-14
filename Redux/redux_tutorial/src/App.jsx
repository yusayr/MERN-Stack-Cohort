import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
export function App() {
  return (
    <div className='w-full text-center'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
