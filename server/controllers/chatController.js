var mongoose = require("mongoose");
var Chat = mongoose.model("Chat");
var Message = mongoose.model("Message");

module.exports.create = function(req,response){
    console.log("****",req.body,"****");
    var chat = new Chat(
        {
            participants: [ req.body.sender, req.body.reciever ]
        }
    );

    chat.save(function(err,newChat){
        console.log(chat)
        if(err){
            console.log("*****",chat)
            console.log("Err creating chat", err);  
        }

        var message = new Message({
            chat: chat,
            user: req.user,
            message: req.body.message,
        });

        message.save(function(err,newMessage){
            if(err){
                console.log("error while making message",err);
            }
            else{
                response.json({
                    message:"Chat started",
                    chatId: chat,
                });
            }
        });
    });

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

module.exports.show = function(req,response){
    Message.find({chat:req.params.chatId}).populate({
        path:'User',
        select: 'user.username',
    }), function(err, chat){
            if(err){
                console.log("***** ERROR WHILE GETTING MESSAGES! *****",err);
            }
            else{
                console.log(chat,"********")
                response.json({
                    chat: chat
                });
            }

        }
}

module.exports.getChat = function(req, response){
    
    console.log("***** getChat contolloler is working!")

    Chat.find(function(err,chats){
        if(err){
            console.log(err);
        }
        else{
            console.log(chats)
            response.json({
                chats:chats
            });
        }
    });

}

