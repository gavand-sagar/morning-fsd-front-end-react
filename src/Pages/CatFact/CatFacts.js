import React, { useState } from 'react'
import { Switch } from '@mui/material'
import Header from '../../Shared/Components/Header'
import { customGet } from '../../Utilitites/custom-fetch'
export default function CatFacts() {
    const [fact, setFact] = useState('Loading...')


    function loadAFact() {

        customGet('https://catfact.ninja/fact')
            .then(response => {
                setFact(response.fact)
            })
    }

    return (
        <div>
            <Header />

            <button onClick={loadAFact}>Get new</button>
            <h1>Here is a fact about cats</h1>
            <p>{fact}</p>

            <hr></hr>
            <Switch defaultChecked />
        </div>
    )
}
