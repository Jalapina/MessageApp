var users = require("../controllers/userController");
var messages = require("../controllers/messageController");

module.exports = function(app){
    
    // Users

    app.post('/api/users',users.register);
    app.post('/api/users/authenticate',users.login);
    app.get('/api/users',users.home)    

    //Messages

    // app.get('/api/messages',messages.chat);
    app.get('/api/messages/:senderId/:recieverId',messages.show);
    app.post('/api/messages/create',messages.create);

}