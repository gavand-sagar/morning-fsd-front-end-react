import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from './MyButton'

export default function Header() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        let usernameValue = localStorage.getItem('usernameValue')
        if (usernameValue) {
            setUsername(usernameValue)
        } else {
            navigate('/login')
        }
    }, [])

    function logout() {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div className='app-header'>
            <h1>Welcome {username}  <button onClick={logout}>Logout</button></h1>
            <Link to={'/posts-list'}>
                <MyButton label={'Posts'}></MyButton>
            </Link>

            <Link to={'/cat-fact'}>
                <MyButton label={'Cat Fact'}></MyButton>
            </Link>

        </div>
    )
}
