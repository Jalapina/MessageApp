console.log("/server/config/mongoose.js");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/banded", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to Mongoose");
    }
});
require("../models/userSchema");
require("../models/messageSchema");