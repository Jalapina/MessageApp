var mongoose = require("mongoose");
var User = require("./userSchema");

const { ObjectId } = mongoose.Schema.Types;

var chatSchema = mongoose.Schema({

    participant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

});

mongoose.model('Chat',chatSchema);