import React, { useState } from 'react'
import {
    Box,
    Button,
    TableCell,
    TableRow,
    TextField
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { DateTime } from 'luxon'

export const DisplayRow = (props) => {
    const { beginEdit, removeComment, row, rowIndex } = props
    const dateFormat = (date) => {
        return DateTime.fromMillis(Number(date)).toLocaleString(DateTime.DATETIME_FULL)
    }
    return <TableRow key={row.id}>
        <TableCell>{rowIndex + 1}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.body}</TableCell>
        <TableCell>{dateFormat(row.createdAt)}</TableCell>
        <TableCell>
            <Box>
                <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={beginEdit}
                >
                    Edit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={removeComment}
                >
                    Delete
                </Button>
            </Box>
        </TableCell>
    </TableRow>
}

export const EditRow = (props) => {
    const {
        cancelEdit,
        comment,
        email,
        finishEdit,
        name,
        row,
        rowIndex,
        setName,
        setEmail,
        setComment
    } = props

    const dateFormat = (date) => {
        return DateTime.fromMillis(Number(date)).toLocaleString(DateTime.DATETIME_FULL)
    }
    return <TableRow key={row.id}>
        <TableCell>{rowIndex + 1}</TableCell>
        <TableCell>
            <TextField
                fullWidth
                variant="outlined"
                label="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
        </TableCell>
        <TableCell>
            <TextField
                fullWidth
                variant="outlined"
                label="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
        </TableCell>
        <TableCell>
            <TextField
                fullWidth
                variant="outlined"
                label="Comment"
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            />
        </TableCell>
        <TableCell>{dateFormat(row.createdAt)}</TableCell>
        <TableCell>
            <Box>
                <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={finishEdit}
                >
                    Update
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={cancelEdit}
                >
                    Cancel
                </Button>
            </Box>
        </TableCell>
    </TableRow>
}
