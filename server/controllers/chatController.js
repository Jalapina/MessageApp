var mongoose = require("mongoose");
var Chat = mongoose.model("Chat");
var Message = mongoose.model("Message");

module.exports.create = function(req,response){
    console.log("****",req.body,"****")
    var chat = new Chat(
        {
            particapants: [ req.user, req.body.recipient ]
        }
    )

    chat.save(function(err,newChat){

        if(err){
            console.log("Err creating chat", err);
        }
        var message = new Message({
            chat: newChat._id,
            user: req.user,
            message: req.body.message,
        })

        message.save(function(err,newMessage){
            if(err){
                console.log("error while making message",err);
            }
            else{
                response.json({
                    message:"Chst started",
                    chatId: chat._id 
                })
            }
        })
    })

}

module.exports.reply = function(req,response){
    var reply = new Message({
        chat: req.params.chatId,
        message: req.body.message,
        user: req.user._id,
    });
    reply.save(function(err , sentReply){
        if(err){
            console.log("Error while replying", err);
        }
        else{
            response.json({
                message:"Reply was successful!"
            })
        }
    })
}

