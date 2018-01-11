var mongoose = require("mongoose");
var Chat = mongoose.model("Chat");
var Message = mongoose.model("Message");

module.exports.create = function(req,res){

    Chat.new({
        participants:req.user._id, participants:req.reciever._id 
    }
        ,function(err,chat){
        if(err){
            console.log(err);
        }
        else{
            console.log("Created new chat!")
            console.log("***",chat)
        }
    });
}


