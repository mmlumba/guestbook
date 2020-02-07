const fetch = require('node-fetch');
const resolver = {
    Query: {
        comments: () => {
            return fetch('https://jsonplaceholder.typicode.com/comments')
            .then((result) => result.json())
            .then((list) => list)
            .catch(err => console.log(err))
        }
    }
}

module.exports = resolver