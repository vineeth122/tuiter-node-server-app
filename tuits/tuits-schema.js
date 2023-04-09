import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: String,
    handle: String,
    time: String,
    body: String,
    title: String,
    image: String,
    postimage: String,
    subtitle: String,
    link: String,
    comment: Number,
    retweet: Number,
    like: Number,
    liked: Boolean,
    dislike: Number
}, {collection: 'tuits'});
export default schema;
