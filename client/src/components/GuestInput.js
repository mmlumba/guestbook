import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import { useMutation } from '@apollo/client';
import { GET_COMMENTS, ADD_COMMENT } from '../graphql'

const GuestInput = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [addComment] = useMutation(
        ADD_COMMENT, 
        {
            update(cache, { data: { addComment } }) {
                const { comments } = cache.readQuery({ query: GET_COMMENTS });

                cache.writeQuery({
                    query: GET_COMMENTS,
                    data: { comments: comments.concat([addComment]) },
                });
            }
        }
    )

    // this is mutation object array. 
    // first obj is mutation function
    // second obj is obj with additional keys (for your usage)
    // console.log('mutation object', useMutation(ADD_COMMENT))

    const onClick = () => {
        // accepted input type (from schema.js):
        // {
        //     name: String
        //     email: String
        //     body: String
        // }

        const commentBody = { name, email, body: comment }

        // this is incorrect b/c proper attribute of comment content is "body" in schema
        // const incorrectCommentBody = { name, email, comment }

        console.log('my comment', commentBody)
        console.log('this is where the add mutation is supposed to be')
        addComment({ variables: { comment: commentBody }})

        // clears the form after submit
        setName('')
        setEmail('')
        setComment('')
    }

    return <Container maxWidth="md">
        <form>
            <TextField 
                fullWidth
                label="Name" 
                name="name" 
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <TextField  
                fullWidth 
                label="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
            />
            <TextField
                fullWidth
                label="Comment"
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                multiline
                rows="4"
            />
        </form>
        <Button onClick={onClick} variant="contained" color="primary">
            Submit comment
        </Button>
     </Container>
}

export default GuestInput