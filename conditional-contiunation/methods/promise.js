var userModel = require('../lib/userModelPromised').createUserModel();
var Q = require('q');

module.exports.findMe = function(user, callback){
  Q.resolve(null)
    .then(function () {
      return userModel.findByEmail(user.email);
    })
    .then(function (result) {
      return result || userModel.findByName(user.name);
    })
    .then(function (result) {
      return result || userModel.findByGithub(user.github);
    })
    .nodeify(callback);
};

// The following function will work once ES6 comes out:
/*
var findMe = Q.async(function* (user) {
  return (yield userModel.findByEmail(user.email)) ||
         (yield userModel.findByName(user.name)) ||
         (yield userModel.findByGithub(user.github)) || null;
});

module.exports.findMe = function(user, callback){
  findMe(user).nodeify(callback);
};
*/