import React from 'react'
import { useState } from 'react'
import Post from './Components/Post'
import { Button, TextField } from '@mui/material'
import Header from '../../Shared/Components/Header'
import PortalsUsername from '../../PortalsUsername'
import { customGet, customPost } from '../../Utilitites/custom-fetch'
export default function PostList() {

    const [heading, setHeading] = useState('')
    const [content, setContent] = useState('')

    const [posts, setPosts] = useState([])

    const [pageNumber,setPageNumber] = useState(1)

    function createPost() {

        let obj = {
            author: localStorage.getItem('usernameValue'),
            heading: heading,
            content: content
        }

        customPost(`/posts`, obj)
            .then(response => {
                if (response.result == true) {
                    alert('Post added.')
                }
            })
    }

    function loadMore(){
        customGet('/posts?page=' + pageNumber)
        .then(response => {
            setPageNumber(pageNumber+1)
            setPosts(posts.concat(response))
        })

    }

    return (
        <div>

            <Header></Header>

            <TextField label="Heading" variant="outlined" value={heading} onChange={e => setHeading(e.target.value)} />
            <br></br>
            <br></br>
            <TextField label="Content" variant="outlined" value={content} onChange={e => setContent(e.target.value)} />
            <br></br>
            <br></br>

            <Button variant="outlined" onClick={createPost}>Create Post</Button>
            <hr></hr>
            <div>
            </div>
            {
                posts.map(item => <><Post item={item} /></>)
            }

            <Button variant="contained" onClick={loadMore}>Load More...</Button>
        </div>
    )
}
