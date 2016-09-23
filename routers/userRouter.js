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
  console.log(' in router.post');
  console.log('request body:', req.body);
});

module.exports = router;
