var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messageapp", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to Mongoose");
    }
});

require("../models/userSchema");
require("../models/messageSchema");