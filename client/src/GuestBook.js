import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import {
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper
} from '@material-ui/core'
import { DateTime }from 'luxon'
import Actions from './Actions'

const GET_COMMENTS = gql`
    query comments {
        comments {
            id
            name
            email
            body
            createdAt
        }
    }
`

const GuestBook = () => {
    const { data, loading, error } = useQuery(GET_COMMENTS)

    if (loading) {
        // debugger
        return <CircularProgress />
    }
    if (error) {
        console.log(error)
        return <Typography variant="body1">{error.message}</Typography>
    }
    const dateFormat = (date) => {
        return DateTime.fromMillis(Number(date)).toLocaleString(DateTime.DATETIME_FULL)
    }
    
    const rows = data.comments
    return <TableContainer component={Paper}>
        <Table aria-label="guestbook">
            <TableHead>
                <TableRow>
                    <TableCell>Row</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Body</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, i) => (
                    <TableRow key={row.id}>
                        <TableCell>{i+1}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.body}</TableCell>
                        <TableCell>{dateFormat(row.createdAt)}</TableCell>
                        <TableCell><Actions /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default GuestBook