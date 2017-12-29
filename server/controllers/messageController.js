var mongoose = require("mongoose");
var User = mongoose.model("User");
var Message = mongoose.model("Message");
 
module.exports.create = function(request, response){
    console.log(request.body,"YOUR MESSAGE")
    Message.create({message:request.body.context , sender:request.body.sender , reciever:request.body.reciever}, 
        function(err,message){
            if(err){
                console.log("error",err);
            }
            else{
                // console.log("Created a MSG")
                response.json({
                    message:"Created a Message!",
                    message:{message},
                });
            }
        });
}

module.exports.show = function(request, response){
    console.log("**RecieverID "+request.params.recieverId)
    console.log("***SenderID "+request.params.senderId)
    Message.find({reciever:request.params.recieverId, sender:request.params.senderId},function(err,message){
        
        console.log("**",message)

        if(err){
            console.log("******ERROR******",err);
        }
        else{
            response.json({
                message: message
            });
        }
    });
}
