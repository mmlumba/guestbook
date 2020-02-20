import React from 'react'
import { Box, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Actions = () => {
    return <Box>
        <Button
            variant="contained"
            startIcon={<EditIcon />}
        >
            Edit
        </Button>
        <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    </Box>
}

export default Actions