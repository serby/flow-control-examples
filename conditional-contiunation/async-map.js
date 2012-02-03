var 
  userModel = require('../lib/userModel').createUserModel(),
  async = require('async');

module.exports.findMe = function(user, callback){
  var foundUser;
  async.mapSeries(
    [
      async.apply(userModel.findByEmail, user.email),
      async.apply(userModel.findByName, user.name),
      async.apply(userModel.findByGithub, user.github)
    ], 
    function (item, iteratorCallback) {
      item(function(error, user) {
        if (error) {
          return callback(error);
        }
        if (user !== null) {
          foundUser = user;
          iteratorCallback(true);
        } else {
          iteratorCallback(false);
        }
      });
    },
    function (result) {
      callback(null, foundUser);
    }
  );
}