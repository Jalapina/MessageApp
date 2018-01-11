var mongoose = require("mongoose");
var Chat = mongoose.model("Chat");
var Message = mongoose.model("Message");

module.exports.create = function(req,res){

    var chat = new Chat(
        {
            particapants: [ req.body.user, req.body.reciever ]
        }
    )

    chat.save(function(err,newChat){
        if(err){
            console.log("Err")
        }
        var message = new Message({
            chat: newChat._id,
            user: req.body.FILLER,
            message: req.body.message,
        })

        message.save(function(err,newMessage){
            if(err){
                console.log("error while making message")
                console.log(err)
            }
            else{
                Response.json({
                    message:"Chst started",
                    chatId: chat._id 
                })
            }
        })
    })



}

module.exports.reply = function(req,res){
    var reply = new Message(function(err , sentReply){
        if(err){
            console.log("Error while replying", err);
        }
        else{
            Response.json({
                message:"Reply was successful!"
            })
        }
    })
}

