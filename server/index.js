const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolver')
const GuestbookAPI = require('./api')
const { initDB } = require('./mongoConnection')

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => ({
        GuestbookAPI: new GuestbookAPI()
    })
 });

initDB(() => {
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
})
