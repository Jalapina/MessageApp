var mongoose = require("mongoose");
var User = require("./userSchema");

const Schema = mongoose.Schema;

var chatSchema = mongoose.Schema({

    participants:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],

});

mongoose.model('Chat',chatSchema);