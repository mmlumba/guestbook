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

export const EDIT_COMMENT = gql`
    mutation editComment($commentId: ObjectID!, $comment:CommentInput!) {
        editComment(commentId: $commentId, comment: $comment) {
            id
            name
            email
            body
            createdAt
        }
    }
`

export const REMOVE_COMMENT = gql`
    mutation removeComment($commentId:ObjectID!) {
        deleteComment(commentId: $commentId) {
            id
            name
            email
            body
            createdAt
        }
    }
`