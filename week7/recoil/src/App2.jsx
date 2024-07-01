import { useState, React, useEffect } from 'react'
import { countAtom, evenOddSelector } from './store/atoms/count.jsx'
import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil'

function App2() {

    return (
        <>
            <RecoilRoot>
                <Count />
                <Buttons />
                <Component />
            </RecoilRoot>
        </>
    )
}

function Count() {
    const count = useRecoilValue(countAtom)

    return <div>
        <div>{count}</div>
    </div>
}

function Buttons() {
    const [count, setCount] = useRecoilState(countAtom);

    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1)
        }}>Decrease</button>
    </div>
}


function Component() {
    const evenOdd = useRecoilValue(evenOddSelector)

    return <div>
        {evenOdd == 0 ? "It is even" : "It is Odd"}
    </div>
}

export default App2
