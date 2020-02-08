const { Comment } = require('./mongoConnection')

class GuestbookAPI {
    initialize({ context }) {
        this.context = context
    }

    async fetchEntries() {
        const entries = await Comment.find().exec()
        return entries
    }
}

module.exports = GuestbookAPI