import React from 'react'
import { useState } from 'react'
import Rating from './Rating'

export default function MyForm() {

    const [name, setName] = useState('')

    const [rating, setRating] = useState('')

    function doSomething() {
        setRating(name)
    }

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />

            <button onClick={doSomething}>Submit</button>


            <hr />
            <Rating type={rating} />

        </div>
    )
}
