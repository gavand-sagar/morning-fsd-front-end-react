import React, { useState } from 'react'

export default function RatingWithClick() {

    const [rating, setType] = useState('0')

    function setAsOne() {
        setType('1')
    }
    function setAsTwo() {
        setType('2')
    }
    function setAsThree() {
        setType('3')
    }
    function setAsFour(){
        setType('4')
    }
    function setAsFive(){
        setType('5')
    }

    return (
        <>
            {rating >= 1 ? < span onClick={setAsOne}>&#9733;</span> : <span onClick={setAsOne}>&#9734;</span>}
            
            {rating >= 2 ? < span onClick={setAsTwo}>&#9733;</span> : <span onClick={setAsTwo}>&#9734;</span>}
            
            {rating >= 3 ? < span onClick={setAsThree}>&#9733;</span> : <span onClick={setAsThree}>&#9734;</span>}
            
            {rating >= 4 ? < span onClick={setAsFour}>&#9733;</span> : <span onClick={setAsFour}>&#9734;</span>}
            
            {rating >= 5 ? < span onClick={setAsFive}>&#9733;</span> : <span onClick={setAsFive}>&#9734;</span>}

        </>
    )
}
