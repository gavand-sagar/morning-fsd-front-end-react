import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { customPatch, customPost } from '../../../Utilitites/custom-fetch.js'
export default function Post({ item }) {

    const [likes, setLikes] = useState(item.likes);
    const [comments, setComments] = useState(item.comments);

    const [commentBox, setCommentBox] = useState('')

    function increaseLikes() {

        let obj = {
            username: localStorage.getItem('usernameValue')
        }
        customPatch(`/posts/${item._id}/like`, obj)
            .then(response => {
                //do something // create a state
                setLikes(response.newLikes)

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
                    <TextField variant='outlined' label='Type Comment' value={commentBox} onChange={event => setCommentBox(event.target.value)} />
                    <Button variant='contained' onClick={addComment}>Comment</Button>
                </div>
                <div className='action-container'>
                    <div>
                        <span onClick={increaseLikes}>
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </span>
                        <span>&nbsp;&nbsp;{likes}</span>

                        <ul>
                            {
                                item.likedUsers.map(monkey => <li>{monkey}</li>)
                            }
                        </ul>

                    </div>
                    <div>
                        <span>
                            <i class="fa fa-comment-o" aria-hidden="true"></i>
                        </span>
                        <span>&nbsp;&nbsp;{comments.length}</span>
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
