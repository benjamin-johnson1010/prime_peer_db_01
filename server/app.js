var express = require( 'express' );
var app = express();
// var path = require( 'path' );
var bodyParser = require( 'body-parser' );
// var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
var mongoose = require('mongoose');

//routers
var userRouter = require('../routers/userRouter');

//use routers
app.use('/assignments', userRouter);

//demonstrate query strings and url params



//mongoDB connection URL
// var MongoDB =
mongoose.connect("mongodb://localhost:27017/assignments");

// //if mongoDB connection error...
// MongoDB.on('error', function (err) {
//     console.log('mongodb connection error:', err);
// });
//
// //connection open
// MongoDB.once('open', function () {
//   console.log('mongodb connection open!');
// });

//server listening
app.listen(port, function(){
  console.log('listening on', port);
});
