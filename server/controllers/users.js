var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var User = mongoose.model('User');
//console.log(User)
module.exports = {
   showAll: function(req, res){
    User.find({})
        .sort("-score")
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
  },
  
create: function(req, res) {

        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(req.body.login)
        console.log('+++++++++++++++++++')
        User.findOne({login: req.body.login})
          .then(data => {
            if(data) {
                console.log(data)
                console.log('user is here!')
                res.json(false)
            } else {
              console.log('creating')
              var user = new User({
                login: req.body.login,
                score: req.body.score,
                photo: req.body.photo
              });
          user.save()
            .then(saved => {
              res.json(saved)
            })
            .catch(err => {
              res.json(err)
            })
            }
          })
        

},
  // })
          // User.update({login: req.body.login}, {$set: {score: req.body.score}}, function(err, data){
          //   if(err){
          //     console.log('Not in DB')
          //     var user = new User({
          //         login: req.body.login,
          //         score: req.body.score,
          //         photo: req.body.photo
          //       });
          //     user.save(function(err, data) {
          //         if(err) {
          //           console.log('failed')
          //           res.json(err)
          //         } else {
          //           console.log("saved")
          //           res.json(data)
          //         }
          //     })
          //   }else{
          //     console.log('updated')
          //     res.json(data)
          //   }
          // })
        
  //   var user = new User({
  //     login: req.body.login,
  //     score: req.body.score,
  //     photo: req.body.photo
  //   });
  // user.save(function(err, data) {
  //     if(err) {
  //       console.log('failed')
  //       res.json(err)
  //     } else {
  //       console.log("saved")
  //       res.json(data)
  //     }
  // })
    
  
  checker(log){
    let x = log
    User.find({login: x}, function(err, user){
      if(err){
        console.log('not found')
        return false
      }
      if(user){
        console.log(user.length)
        if(user.length==0){
          return true
          console.log("nope, user isn't here", x)
          
        }
        console.log('yep, user is here', x)
        return false
      }
    })
  },
update: function(req, res){

  console.log(req.body.status)
  console.log('here')
  User.update({_id: req.body.id}, {$set: {game1: req.body.status}}, function(err, data){
    if(err){
      console.log('failed to delete')
      res.json(err);
      }else{
      console.log("deleted")
      res.json(data);
    }
  })
      
  },  
update2: function(req, res){

  console.log(req.body.status)
  console.log('here')
  User.update({_id: req.body.id}, {$set: {game2: req.body.status}}, function(err, data){
    if(err){
      console.log('failed to delete')
      res.json(err);
      }else{
      console.log("deleted")
      res.json(data);
    }
  })
      
  },  
update3: function(req, res){

  console.log(req.body.status)
  console.log('here')
  User.update({_id: req.body.id}, {$set: {game3: req.body.status}}, function(err, data){
    if(err){
      console.log('failed to delete')
      res.json(err);
      }else{
      console.log("deleted")
      res.json(data);
    }
  })
      
  }, 

delete: function(req, res){

  console.log(req.body.id)
  console.log('here')

  User.remove({_id: req.body.id}, function(err, data){
    if(err){
      console.log('failed to delete')
      res.json(err);
      }else{
      console.log("deleted")
      res.json(data);
    }
  })
      
  },
  show_user: function(req, res){
   console.log(req.params.id)
   User.find({_id: req.params.id}, function(err, data){
      if(err){
      console.log('failed to delete')
      res.json(err);
      }else{
      console.log("deleted")
      res.json(data);
    }
    })
  },
}
