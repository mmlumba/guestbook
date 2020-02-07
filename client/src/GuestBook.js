import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

const GET_COMMENTS = gql`
    query comments {
        comments {
            name
        }
    }
`

const GuestBook = () => {
    const { data, loading, error } = useQuery(GET_COMMENTS)

    if (loading) return 'loading'
    if (error) {
        console.log(error)
        return toString(error)
    }
    console.log(data)
    return <Fragment>
        {data.comments.map((comment, i) => <p key={i}>{comment.name}</p>)}
    </Fragment>
}

export default GuestBook