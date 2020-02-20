import React, { useState } from 'react'
import { DisplayRow, EditRow } from './RowTypes'
import { GET_COMMENTS, EDIT_COMMENT, REMOVE_COMMENT } from '../graphql'
import { useMutation } from '@apollo/client'

const GuestBookRow = (props) => {
    const { row, rowIndex } = props
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(row.name)
    const [email, setEmail] = useState(row.email)
    const [comment, setComment] = useState(row.body)

    const [editComment] = useMutation(EDIT_COMMENT, 
        {
            update(cache, { data: { editComment } }) {
                const { comments } = cache.readQuery({ query: GET_COMMENTS })
                const updatedComment = Object.assign(editComment, comments.filter(comment => comment.id === editComment.id))
                cache.writeQuery({
                    query: GET_COMMENTS,
                    data: { comments: [...comments, updatedComment] },
                });
            }
        }
    )

    const [removeComment] = useMutation(REMOVE_COMMENT,
        {
            update(cache, { data: { deleteComment } }) {
                const { comments } = cache.readQuery({ query: GET_COMMENTS })
                const newComments = comments.filter(comment => comment.id !== deleteComment.id)
                cache.writeQuery({
                    query: GET_COMMENTS,
                    data: { comments: newComments },
                });
            }
        }
    )

    return isEditing ? 
        <EditRow
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            comment={comment}
            setComment={setComment} 
            cancelEdit={() => setIsEditing(false)}
            finishEdit={async () => {
                await editComment({ 
                    variables: {
                        commentId: row.id,
                        comment: { 
                            name, 
                            email, 
                            body: comment 
                        }
                    }
                })
                setIsEditing(false)
            }}
            row={row} 
            rowIndex={rowIndex} 
        /> :
        <DisplayRow
            beginEdit={() => setIsEditing(true)}
            removeComment={async () => await removeComment({ variables: { commentId: row.id }})}
            row={row} 
            rowIndex={rowIndex} 
        />
}

export default GuestBookRow