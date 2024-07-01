import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2) //setCount function is being intialised. UseState is a hook in react that is used to initialise the count variable

  return ( //setCount is being defined
      <div>
        <button onClick={() => setCount((count) => count**2)}>  
          count is {count}
        </button> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam commodi aliquam nisi, ipsum quo architecto sint nulla quasi magnam autem totam fuga deserunt ea, adipisci veniam rerum eveniet eos delectus?</p>
      </div>
        
   )
}

export default App
