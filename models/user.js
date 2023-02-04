const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
    email : {
        required : true,
        type: String
    },
    password : {
        required : true,
        type: String
    },
    name : {
        required : true,
        type: String
    },
    status : {
        required : true,
        type: String
    },
    posts : [{
        type : Schema.Types.ObjectId,
        ref : 'Post'
    }]
});

module.exports = mongoose.model('User', userSchema);