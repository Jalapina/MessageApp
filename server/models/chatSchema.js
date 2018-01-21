var mongoose = require("mongoose");
var User = require("./userSchema");

const Schema = mongoose.Schema;

var chatSchema = mongoose.Schema({

    participants:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],

}, 
{
    timestamps: true,
});

mongoose.model('Chat',chatSchema);