import React from 'react'
import { useQuery } from '@apollo/client';
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
import { GET_COMMENTS } from '../graphql'
import GuestBookRow from './GuestBookRow';

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
                    <GuestBookRow row={row} rowIndex={i}/>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default GuestBook