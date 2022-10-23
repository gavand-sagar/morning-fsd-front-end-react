import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import Header from '../../Shared/Components/Header';
import { customPost } from '../../Utilitites/custom-fetch';

export default function AddQuestion() {

    const [question, setQuestion] = useState('');

    function createQuestion(){
        let obj = {
            author: localStorage.getItem('usernameValue'),
            questionText: question
        }

        customPost(`http://localhost:3001/questions`, obj)
            .then(response => {
                if (response.result == true) {
                    alert('Post added.')
                }
            })
    }

    return (
        <div>
            <Header />


            <TextField label="Question" variant="outlined" value={question} onChange={e => setQuestion(e.target.value)} />
            <br></br>
            <br></br>
            <Button variant="outlined" onClick={createQuestion}>Ask Question</Button>
        </div>
    )
}
