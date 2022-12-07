import mongoose from "mongoose";

const postSchema = mongoose.Schema({
        name: String,
        creator: String,
        message: String,
        selectedFile: String,
        tags: [String],
        likes: {
                type: Number,
                default: 0,
        },
        createdAt: {
                type: Date,
                default: new Date(),
        },
});
const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
