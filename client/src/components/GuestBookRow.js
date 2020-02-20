import React, { useState } from 'react'
import { DisplayRow, EditRow } from './RowTypes'

const GuestBookRow = (props) => {
    const { row, rowIndex } = props
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(row.name)
    const [email, setEmail] = useState(row.email)
    const [comment, setComment] = useState(row.comment)
    return isEditing ? 
        <EditRow
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            comment={comment}
            setComment={setComment} 
            cancelEdit={() => setIsEditing(false)}
            finishEdit={() => {
                console.log('something?')
                setIsEditing(false)
            }}
            row={row} 
            rowIndex={rowIndex} 
        /> :
        <DisplayRow
            beginEdit={() => setIsEditing(true)}
            removeComment={() => {
                console.log('remove comment!')
                setIsEditing(false)
            }}
            row={row} 
            rowIndex={rowIndex} 
        />
}

export default GuestBookRow