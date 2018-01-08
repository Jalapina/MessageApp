var mongoose = require("mongoose");
var Chat = mongoose.model("Chat");
var Message = mongoose.model("Message");

module.exports.create = function(req,res){
    
    Chat.create({},function(err,chat){

    });
}


