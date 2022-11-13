import React, { useState } from 'react'
import { Switch } from '@mui/material'
import Header from '../../Shared/Components/Header'
import { customGet } from '../../Utilitites/custom-fetch'
import { useDispatch, useSelector } from 'react-redux'
import { increment,incrementByAmount,changeEmail } from '../../counterSlice'

export default function CatFacts() {
    const dispatch = useDispatch()

    const [fact, setFact] = useState('Loading...')

    const count = useSelector((state) => state.counter.value)
    const email = useSelector((state)=>state.counter.email)

    function loadAFact() {

        customGet('https://catfact.ninja/fact')
            .then(response => {
                setFact(response.fact)
            })
    }

    function changeEmailLocal(){
        dispatch(changeEmail("John@pqr.com"))
    }

    function incrementValue(){
        dispatch(incrementByAmount(5))
    }

    return (
        <div>
            <Header />

            email is : {email}
            <br></br>

            Count is now : <span>{count}</span>

            <button onClick={incrementValue}>Increment</button>
            <button onClick={changeEmailLocal}>Email Change</button>

            {/* <button onClick={loadAFact}>Get new</button>
            <h1>Here is a fact about cats</h1>
            <p>{fact}</p>

            <hr></hr>
            <Switch defaultChecked /> */}
        </div>
    )
}
