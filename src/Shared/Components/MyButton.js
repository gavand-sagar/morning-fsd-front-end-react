import React, { useState } from 'react'

export default function MyButton({ label }) {

    const [type, setType] = useState('')

    function toggle() {
        // if (type == 'active') {
        //     setType('')
        // } else {
        //     setType('active')
        // }
    }

    return (
        <>
            {
                type == 'active'
                    ? <button onClick={toggle} className='button active'>{label}</button>
                    : <button onClick={toggle} className='button'>{label}</button>
            }
        </>
    )
}
