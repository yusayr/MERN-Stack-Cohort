import { useState, React, lazy, Suspense } from 'react'
import './App.css'
const Landing= lazy(()=> import('./components/Landing'))
const Dashboard= lazy(()=> import('./components/Dashboard'))
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  //Suspense API for asynchronous data functioning
  return (
    <div>
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading.."}><Dashboard /> </Suspense>} />
          <Route path='/' element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate();

  return <div>
  <button onClick={() => { navigate("/") }}>Landing Page</button>
  <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
</div>

}


export default App
