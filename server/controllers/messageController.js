// var mongoose = require("mongoose");
// var User = mongoose.model("User");
// var Message = mongoose.model("Message");
// var Chat = mongoose.model("Chat")

// module.exports.create = function(request, response){
//     console.log(request.body,"YOUR MESSAGE")
//     Message.create(
//         {   
//             chat: request.body.chat,
//             message:request.body.context, 
//             sender:request.body.sender
//         }, 
//         function(err,message){
//             if(err){
//                 console.log("error",err);
//             }
//             else{
//                 // console.log("Created a MSG")
//                 response.json({
//                     message:"Created a Message!",
//                     message:{message},
//                 });
//             }
//         });
// }

// module.exports.show = function(request, response){
    
//     Chat.find({reciever:request.params.recieverId},function(err,message){
        
//         console.log("**",message)

//         if(err){
//             console.log("******ERROR******",err);
//         }
//         else{
//             response.json({
//                 message: message
//             });
//         }
//     });
// }
