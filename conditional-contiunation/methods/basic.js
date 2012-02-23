var userModel = require('../lib/userModel').createUserModel();

module.exports.findMe = function(user, callback) {
  userModel.findByEmail(user.email, function(error, foundUser) {

    if (error) {
      return callback(error);
    }
    if (foundUser === null) {
      userModel.findByName(user.name, function(error, foundUser) {
        if (error) {
          return callback(error);
        }
        if (foundUser === null) {
          userModel.findByGithub(user.github, function(error, foundUser) {

            if (error) {
              return callback(error);
            }
            if (foundUser === null) {
              callback(null, null);
            } else {
              callback(null, foundUser);
            }
          });
        } else {
          callback(null, foundUser);
        }
      });
    } else {
      callback(null, foundUser);
    }
  });
};