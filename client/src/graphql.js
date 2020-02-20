import gql from 'graphql-tag'

export const GET_COMMENTS = gql`
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

export const ADD_COMMENT = gql`
    mutation addComment($comment:CommentInput!) {
        addComment(comment:$comment) {
            id
            name
            email
            body
            createdAt
        }
    }
`