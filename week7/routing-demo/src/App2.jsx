import { useState, React, useContext } from 'react'
import { CountContext } from './Context';

function App2() {
    const [count, setCount] = useState(0);

    //wrap anyone that wants to use the teleported value inside a provider
    return (
        <div>
            <CountContext.Provider value={{setCount, count}}>
                <Count/>
                <Buttons/>
            </CountContext.Provider>
        </div>
    ) 
}

function Count() {
    const { count }= useContext(CountContext)
    
    return <div>
        <div>{count}</div>
    </div>
}

function Buttons() {
    const { count , setCount } = useContext(CountContext)

    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1)
        }}>Decrease</button>
    </div>
}

export default App2
