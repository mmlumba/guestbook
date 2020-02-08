import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag'

const ADD_COMMENT = gql`
    mutation addComment($comment:CommentInput!) {
        addComment(comment:$comment) {
            id
            name
            email
            body
        }
    }
`
const GuestInput = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [addComment, { data }] = useMutation(ADD_COMMENT)

    const onClick = () => {
        const commentBody = { name, email, body: comment }
        // console.log('COMMENT BODY', commentBody)
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