import { useEffect, useRef } from 'react'

export default function UseRefComponent() {
    const divRef = useRef();
    const incomeTax = 2000;

    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML = 10;
        }, 5000)
    })


    return <>
        Total Income Tax is <div ref={divRef}>{incomeTax}</div> 
    </>
}


