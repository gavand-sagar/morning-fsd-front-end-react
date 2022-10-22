import React, { useState } from 'react'

export default function SquareCalculatorWithApi() {

    const [square, setSquare] = useState('');
    const [number, setNumber] = useState(0);

    function getSquare() {
        fetch(`http://localhost:3001/square-of-number?number=${number}`)
            .then(s => s.json())
            .then(response => {
                // anything after response

                setSquare(response.square)
            })
    }

    return (
        <div>

            <input type='number' value={number} onChange={e => setNumber(e.target.value)} />
            <br></br>
            <br></br>
            <button onClick={getSquare}>Get square</button>
            <hr></hr>
            <p>Square of {number} : {square}</p>
        </div>
    )
}
