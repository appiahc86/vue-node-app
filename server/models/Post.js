import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('posts', postSchema);
export default Post;