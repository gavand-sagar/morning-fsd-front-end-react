import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { customGet, customPost } from '../../Utilitites/custom-fetch'

export default function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login() {

        if (username && password) {
            customGet(`http://localhost:3001/authenticate?username=${username}&password=${password}`)
                .then(response => {

                    if (response.result == true) {
                        // setting info in local-storage to have global access

                        localStorage.setItem('usernameValue', username)

                        ////  we want to change this line 
                        // just to navigate user to post page after successful login
                        // are you with me on that?
                        navigate('/posts-list') /// navigate
                        //redirect
                    } else {
                        alert('Invalid')
                        //no redirect
                    }

                    setUsername('')
                    setPassword('')

                })
        } else {
            alert('Required username and password')
        }
    }

    function signUp() {
        let obj = {
            username: username,
            password: password
        }

        customPost(`http://localhost:3001/create-new-user`, obj)
            .then(response => {

                if (response.result == true) {
                    alert('User added.')
                } else {
                    alert('Already present.')
                }

            })
    }

    return (
        <div className="login-page">
            <div class='login-form'>
                <TextField variant="outlined" value={username} onChange={e => setUsername(e.target.value)} type='text' label='Username' />
                <br></br>
                <br></br>
                <TextField variant="outlined" value={password} onChange={e => setPassword(e.target.value)} type='text' label='Password' />
                <br></br>
                <br></br>
                <Button variant="contained" onClick={login}>Login</Button>&nbsp;
                <Button variant="outlined" onClick={signUp}>SignUp</Button>
            </div>

        </div>
    )
}
