import React, { useState } from 'react'
import MyButton from './MyButton'

export default function ButtonsWithForm() {

    const [items, setItems] = useState(['Mango', 'Pineapple', 'Apple', 'Banana', 'anshu']);

    const [input, setInput] = useState('')

    function addNewItem() {

        let copy = items.concat([])

        copy.push(input)

        setItems(copy)

        setInput('')
    }


    function makeUpperCase() {


        let copy = items.concat([])

        copy = copy.map(x => x.toUpperCase())

        setItems(copy)

    }

    function makeLowerCase() {
        let copy = items.concat([])

        copy = copy.map(x => x.toLowerCase())

        setItems(copy)
    }

    function makeReverse() {
        var copy = items.concat([]);

        copy = copy.reverse()

        setItems(copy)
    }


    function sortAscending() {
        let copy = items.concat([])


        copy = copy.sort((a, b) => a < b ? -1 : 0);


        setItems(copy)
    }



    function onlyStartWithA() {
        let copy = items.concat([])


        copy = copy.filter(x => x.charAt(0) == 'a'    )

        setItems(copy)
    }


    return (
        <div>

            <input value={input} onChange={e => setInput(e.target.value)} />

            <button onClick={addNewItem}>Add</button>

            <button onClick={makeUpperCase}>Make Uppercase</button>

            <button onClick={makeLowerCase}>Make Lower case</button>

            <button onClick={makeReverse}>Reverse</button>

            <button onClick={sortAscending}>Sort ascending</button>

            <button onClick={onlyStartWithA}>Only Starting with 'a'</button>

            <hr />

            {
                items.map(item => <h1>{item}</h1>)
            }

        </div>
    )
}




