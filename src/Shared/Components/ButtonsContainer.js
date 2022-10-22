import React, { useState } from 'react'
import MyButton from './MyButton'

export default function ButtonsContainer() {

    const [fruits, setFruits] = useState(["grapes", "apple", 'pineapple', "banana"])

    function addItem() {
        //create copy of previous array
        const copy = fruits.concat([])

        copy.push('mango')

        setFruits(copy)
    }

    function sort() {

        let copy = fruits.concat([])

        //this is diff 
        copy.sort();


        setFruits(copy)
    }

    return (
        <div>
            <button onClick={addItem}>Add new Item</button>


            <button onClick={sort}>SOrt</button>


            {
                fruits.map(item => <> <MyButton label={item} /> </>)
            }
        </div>
    )
}
