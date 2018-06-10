var mongoose = require("mongoose");
var User = require("./userSchema.js");
var Chat = require("./chatSchema.js");
const { ObjectId } = mongoose.Schema.Types;

var messageSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    message:{
        type:String, 
        trim: true,
        minlength: 1,
        require: true,
    },

    chat:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
    },

    

}, {
    timestamps: true,
}
);

mongoose.model('Message', messageSchema);
