var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  assignment_number:  Number,
  student_name: String,
  score:   Number,
  date_completed: { type: Date, default: Date.now },
  hidden: Boolean
});
var User = mongoose.model('users', userSchema);
module.exports = User;
