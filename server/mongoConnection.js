const mongoose = require('mongoose');
const { Schema } = require('mongoose')
const { ObjectId } = Schema.Types
require('dotenv').config()

const initDB = fn => {
    const db = mongoose.connection;
    const mongoUrl = process.env.MONGO_CONNECT_URL
    mongoose.connect(mongoUrl);
    db.on('error', console.error.bind(console, 'connection error:'))
    .on('connected', function () {
        console.log(`Connected to ${this.db.databaseName} Database`)
    })
    .once('open', function () {
        fn()
        console.log('database is running!')
    });
    process.on('SIGINT', function () {
        mongoose.disconnect(function () {
            console.log('database disconnected')
            process.exit(0)
        })
    })
} 

const commentSchema = new mongoose.Schema(
    {
        id: ObjectId,
        name: String,
        email: String,
        body: String
    },
    {
        collection: 'guestbook',
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    initDB,
    Comment
}

