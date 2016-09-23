var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

//model
var User = require('../models/assignments');

router.get('/',function(req, res){
  console.log('in router.get');

  User.find({}, function(err, userResults){
    if(err){
        console.log('error occurred', err);
        res.sendStatus(500);
      } else {
        console.log('hit else');
        res.send(userResults);
      }
    });
});


router.post('/',function(req, res){
  console.log('request body:', req.body);
  var sentData = req.body;
  var newUser = new User({
    assignment_number:  sentData.assignment_number,
    student_name: sentData.student_name,
    score:   sentData.score,
    date_completed: sentData.date_completed,
    hidden: sentData.hidden
  });
newUser.save(function(err){
  if(err){
  console.log('error occurred:', err);
  res.sendStatus(500);
}
else{
  console.log('success');
  res.sendStatus(201);
}
});

});

module.exports = router;
