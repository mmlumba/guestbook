const { Comment } = require('./mongoConnection')
const { ObjectId } = require('mongodb')

class GuestbookAPI {
    initialize({ context }) {
        this.context = context
    }

    async fetchEntries() {
        const entries = await Comment.find().exec()
        return entries
    }

    async addComment(args) {
        const newComment = await Comment.create(args.comment)
        return newComment
    }

    async editComment(args) {
        const commentId = args.commentId
        const newComment = await Comment.findOneAndUpdate(
            { _id: ObjectId(commentId) }, 
            args.comment, 
            { new: true }
        )
        return newComment
    }

    async removeComment(args) {
        const removedComment = await Comment.findByIdAndDelete(ObjectId(args.commentId))
        return removedComment
    }
}

module.exports = GuestbookAPI