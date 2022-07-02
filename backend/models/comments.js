import mongoose from "mongoose";

const {Schema} = mongoose;

const commentSchema = new Schema({
    author: {type:String, requiered: true},
    body: {type: String, requiered: true},
    date:{type:Date, default: Date.now}
}, {timestamps:true});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;