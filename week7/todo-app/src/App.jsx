import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { filteredTodoState, searchQueryState, todoState } from '../store/atoms/atoms'

function App() {

  return (
    <>
    <RecoilRoot>
      <SearchBox></SearchBox>
      <h1>Todo List</h1>
      <AllTodos></AllTodos>
    </RecoilRoot>
    </>
  )
}

function AllTodos() {
  const [todos, setTodos] = useRecoilState(todoState)
  const filteredTodos = useRecoilValue(filteredTodoState)

  useEffect(() => {
    try {
      axios.get('https://dummyjson.com/todos')
        .then((res) => {
          setTodos(res.data.todos);
          console.log(res.data.todos)
        })
    }
    catch (err) {
      console.log(err)
    }

  }, [])

  return <div>
    <ul>
      {filteredTodos.map(todo => (
        <li style={{ listStyleType: 'none', padding: 10, fontSize: 30 }} key={todo.id}>{todo.id} {todo.todo}</li>
      ))}
    </ul>
  </div>

}

function SearchBox() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState)

  return (
    <div style={{ paddingLeft: 40 }}>
      <input style={{ height: 30 }} type='text' placeholder='Search Todo'
        onChange={(e) => setSearchQuery(e.target.value)}></input>
    </div>
  )
}


export default App
