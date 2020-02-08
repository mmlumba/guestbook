const fetch = require('node-fetch');
const ObjectID = require('graphql-scalar-objectid')
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const resolver = {
    Comment: {
        id: obj => obj._id,
        createdAt: obj => obj.created_at
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    }),
    ObjectID,
    Query: {
        comments: (_obj, _args, context) => {
            // using static data from JSON file
            // return fetch('https://jsonplaceholder.typicode.com/comments')
            // .then((result) => result.json())
            // .then((list) => list)
            // .catch(err => console.log(err))
            
            // using data from MongoDB
            const list = context.GuestbookAPI.fetchEntries()
            return list
        }
    },
    Mutation: {
        addComment: (obj, args, ctx, info) => {
            const randId = parseInt((Math.random()*1000).toFixed(2))
            const commentBody = Object.assign(args.comment, { id: randId })
            console.log(commentBody)
            return commentBody
        }
    }
}

module.exports = resolver