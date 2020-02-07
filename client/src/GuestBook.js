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

const GET_COMMENTS = gql`
    query comments {
        comments {
            id
            name
            email
            body
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
    const rows = data.comments
    return <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Body</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.body}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default GuestBook