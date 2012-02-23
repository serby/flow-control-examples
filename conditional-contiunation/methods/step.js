var 
  userModel = require('../lib/userModel').createUserModel(),
  step = require('step');

module.exports.findMe = function(user, callback){
  step(
    function() {
      userModel.findByName(user.name, this);
    },
    function(error, result) {
      if (error || result) {
        this(error, result);
      } else {
        userModel.findByEmail(user.email, this);
      }
    },
    function(error, result) {
      if (error || result) {
        this(error, result);
      } else {
        userModel.findByGithub(user.github, this);
      }
    },
    function(error, result) {
      callback(error, result);
    }
  );
};