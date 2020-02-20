import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag'
import { GET_COMMENTS } from './GuestBook'

const ADD_COMMENT = gql`
    mutation addComment($comment:CommentInput!) {
        addComment(comment:$comment) {
            id
            name
            email
            body
            createdAt
        }
    }
`
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

    const onClick = () => {
        const commentBody = { name, email, body: comment }
        addComment({ variables: { comment: commentBody }})
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