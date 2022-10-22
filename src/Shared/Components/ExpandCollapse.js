import React, { useState } from 'react'

export default function ExpandCollapse() {
    const [bodyVisible, setBodyVisible] = useState(true)

    function toggle() {
        if (bodyVisible == true) {
            setBodyVisible(false)
        } else {
            setBodyVisible(true)
        }
    }

    return (
        <div className='question-container'>
            <h1 onClick={toggle}>Heading</h1>

            {
                bodyVisible == true
                    ? <div>uired to fly the two-person
                        Gemini spacecraft and three-person
                        Apollo spacecraft then under development.
                        Mercury Seven had been select</div>
                    : <></>
            }
        </div>
    )
}
