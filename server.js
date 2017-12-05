var express = require('express'),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/front-end/dist'));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.all('*',(req,res,next) =>{
    res.sendfile(path.resolve('./front-end/dist/index.html'))
});

app.listen(8000, function(){
    console.log('Running on port 8000')
});