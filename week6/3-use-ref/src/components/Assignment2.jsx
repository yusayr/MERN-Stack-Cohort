import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [count, setCount] = useState(88) //this variable means nothing but only used to force a rerender. You can set the value to anything that can be changed.
    const rerenderCount = useRef(0)

    const handleReRender = () => {
        setCount(count*2) //Any change can be applied. The prupose is only to force a change
    };

    rerenderCount.current = rerenderCount.current + 1;
 
    return (
        <div>
            <p>This component has rendered {rerenderCount.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};