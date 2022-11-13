import { Avatar, Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react'
import UserGlobalContext from '../../../Shared/Data/UserGlobalContext.js'
import { customGet, customPatch, customPost } from '../../../Utilitites/custom-fetch.js'
export default function Post({ item }) {

    const {username} = useContext(UserGlobalContext)

    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);

    const [commentBox, setCommentBox] = useState('')

    function increaseLikes() {

        let obj = {
            username: localStorage.getItem('usernameValue')
        }
        customPost(`/posts/${item._id}/likes`, obj)
            .then(response => {
                //do something // create a state
                setLikes(response.likes)

                //get all the post one more
            })
    }
    function addComment() {
        let obj = {
            username: localStorage.getItem('usernameValue'),
            commentText: commentBox
        }
        customPost(`/posts/${item._id}/comments`, obj)
            .then(response => {
                setComments(response.newComments)
            })
    }

    function loadComments(){
        customGet(`/posts/${item._id}/comments`)
            .then(response => {
                setComments(response.newComments)
            })
    }

    function loadLikes(){
        customGet(`/posts/${item._id}/likes`)
        .then(response => {
            setLikes(response.likes)
        })
    }
    return (
        <>
            <div className="post-item-container">
                <div className='avatar-icon-container'>
                    <Avatar>{item.author.charAt(0)}</Avatar>
                </div>
                <span>{item.author}</span>
                <h2>{item.heading}</h2>
                <p>{item.content}</p>
                <div className='action-container'>
                    <TextField variant='outlined' label={'Type Comment as ' + username } value={commentBox} onChange={event => setCommentBox(event.target.value)} />
                    <Button variant='contained' onClick={addComment}>Comment</Button>
                </div>
                
                <div className='action-container'>
                    <div>
                        <span onClick={increaseLikes}>
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </span>
                        <span onClick={loadLikes}>&nbsp;&nbsp;{likes.length || item.likes}</span>

                        <ul>
                            {
                                likes.map(monkey => <li>{monkey.username}</li>)
                            }
                        </ul>

                    </div>
                    <div>
                        <span>
                            <i class="fa fa-comment-o" onClick={loadComments} aria-hidden="true"></i>
                        </span>
                        <span>&nbsp;&nbsp;{comments.length || item.commentsCount}</span>
                        <ul>
                            {
                                comments.map(c => <li>{c.commentText} - {c.username}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <span onClick={increaseLikes}>
                            <i class="fa fa-share-square-o" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
