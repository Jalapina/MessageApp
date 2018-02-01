var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports.home = function(request, response){
    User.find({}, function(err,users){
      if(err){
          console.log(err);
      }
      else{
        response.json(
            {
                users:users
            }
        );
      }
    });
}   

module.exports.login = function(request, response){

    User.findOne({username: request.body.username}, function(err, user){
        if(err){
            console.log('Server error',err)
            response.json({
                errors: err
            });
        }
        else if(user.validPassword(request.body.password)){

            response.json({
                _id: user._id,
                username: user.username,
            });
        }
        else if(user && !user.validPassword(request.body.password)){
            console.log('WRONG PASSWORD', user)
            response.json({
                errors:{
                    login:{
                        message: "Password is incorrect"
                    }
                }
            });
        }
        else {
            response.json({
                errors:{
                    login:{
                        message:"Email does not exist"
                    }
                }
            });
        }
    });
}

module.exports.register = function(request, response){
    console.log("NEW USER", request.body)
    let user = new User({
        username: request.body.username,
        password: request.body.password,
    });

    if(request.body.password == request.body.confirmPassword){
        
        user.save(function(err,newUser){
            if(err){
                console.log(err)
            }
            else{
                response.json({
                    user:newUser
                });
            }
            })
        }
    else{
        console.log("IN ELSE")
        response.json({
            errors:{
                message:"Passwords do not match!"
            }
        })
        }

}

