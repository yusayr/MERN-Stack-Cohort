import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { todosAtomFamily } from './atoms'

function App() {
  //we have used atomfamily with selectorfamily to get data from backend

  return (
    <RecoilRoot>
      <TodoComponent id={1}/>
      <TodoComponent id={2}/>
    </RecoilRoot>
  )
}

function TodoComponent({id}) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <div>
      {todo.title}
      {todo.description}
      <br />
    </div>
  )
}

export default App
