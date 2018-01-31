var mongoose = require("mongoose");
var Chat = mongoose.model("Chat");
var Message = mongoose.model("Message");

module.exports.create = function(req,response){
    console.log("****",req.body,"****");
    var chat = new Chat(
        {
            participants: [ req.body.sender, req.params.recieverId ]
        }
    );

    chat.save(function(err,newChat){
        console.log("C H A T",chat._id)
        if(err){
            console.log("*****",chat)
            console.log("Err creating chat", err);  
        }

        var message = new Message({
            chat: chat._id,
            user: req.body.sender,
            message: req.body.context,
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
    console.log("************",req.body.sender,"************")
    var reply = new Message({
        chat: req.params.chatId,
        message: req.body.context,
        user: req.body.sender,
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
    console.log("Raq",req.params.chatId)
    Message.find({chat:req.params.chatId})
    .populate("user","username")
    .exec(function(err, chat){
        console.log("RESPONSE",chat)
            if(err){
                console.log("***** ERROR WHILE GETTING MESSAGES! *****",err);
            }
            else{
                // console.log(chat,"********")
                response.json({
                    chat: chat
                });
            }
        });
}

module.exports.getChat = function(req, response){
    
    // console.log("getChat controller is working!",req.params)

    Chat.find({participants:req.params.userId})
    // .select('_id')
      .exec(function(err,chats){
        if(err){
            console.log(err);
        }
        let conversations = [];
        // console.log(chats,"CHATS")
        chats.forEach(function(chat){

            Message.find({chat:chat._id})
            .sort('createdAt')            
            .limit(1)
            .populate("user.username")
            .exec(function(err,message){
                if(err){
                    console.log(err);
                }

                conversations.push(message);

                if(conversations.length == chats.length ){
                    response.json({
                        chats:conversations,
                        participants:chats,
                    })
                }

            })
        })
    });

}

