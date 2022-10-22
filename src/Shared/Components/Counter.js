import React from 'react'
import { useState } from 'react'

export default function Counter({ limit }) {

    const [number, setNumber] = useState(0)

    function increment() {
        if (number < limit) {
            setNumber(number + 1)
        }
    }

    function decrement() {
        if (number > 0) {
            setNumber(number - 1)
        }
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{number}</span>
            <button onClick={increment}>+</button>
        </>
    )
}
