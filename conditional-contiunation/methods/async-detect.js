var
  userModel = require(__dirname + '/../lib/userModel').createUserModel(),
  async = require('async');

module.exports.findMe = function(user, callback){
  var foundUser, foundError;
  async.detectSeries(
    [
      async.apply(userModel.findByEmail, user.email),
      async.apply(userModel.findByName, user.name),
      async.apply(userModel.findByGithub, user.github)
    ],
    function (fn, cb) {
      fn(function(error, user) {
        foundUser = user;
        foundError = error;
        cb(foundError || user);
      });
    },
    function(result) {
      callback(foundError, foundUser);
    }
  );
}