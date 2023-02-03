const { default: mongoose, Schema } = require("mongoose");

const postSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    imageUrl : {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model('Post', postSchema);