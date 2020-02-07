import React, { useState, Fragment } from 'react'
import { TextField, Button } from '@material-ui/core'

const GuestInput = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const onClick = () => {
        console.log('MUTATION OBJECT', { name, email, comment })
    }
    return <Fragment>
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
        <Button onClick={onClick} variant="contained">
            Submit comment
        </Button>
        </Fragment>
}

export default GuestInput