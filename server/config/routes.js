var users = require("../controllers/userController");
var chat = require("../controllers/chatController");

module.exports = function(app){
    
    // Users

    app.post('/api/users',users.register);
    app.post('/api/users/authenticate',users.login);
    app.get('/api/users',users.home)    

    //Chat
    
    app.get('/api/chats/:chatId',chat.show);
    app.get('/api/chats/',chat.getChat);
    app.post('/api/chats/new/',chat.create);
    app.post('/api/chats/reply/:chatId',chat.reply);

    //Messages

    // app.get('/api/messages',messages.chat);
    // app.get('/api/messages/:senderId/:recieverId',messages.show);
    // app.post('/api/messages/create',messages.create);

}
