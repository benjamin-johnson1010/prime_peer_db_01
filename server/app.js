var express=require( 'express' );
var app=express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;
var User = require('../models/assignments');
MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
app.listen(port, function(){
  console.log('listening on', port);

});
app.get('/testUser', function(req, res){
  var justin = new User({
  assignment_number: 8,
  student_name: 'Justin',
  score: 80,
});
console.log(justin);
res.send();
});
// app.get('/all', function(req, res){
// User.find({}, function(err, userResults){
//   if(err){
//     console.log('error occurred', err);
//     res.sendStatus(500);
//   }
//   else{
// res.send(userResults);
// }
// });
// });
