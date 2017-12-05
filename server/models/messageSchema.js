var mongoose = require("mongoose");
var User = require("./userSchema.js");
const { ObjectId } = mongoose.Schema.Types;

var messageSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reciever:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    message:{
        type:String, 
        trim: true,
        minlength: 2,
        require: true,
    },
});

mongoose.model('Message', messageSchema);
