var
  userModel = require('../lib/userModel').createUserModel(),
  chain = require('jangle').jangle;

module.exports.findMe = function(user, callback){

  chain()
  .seq(userModel.findByName, user.name)
  .seq(userModel.findByEmail, user.email)
  .seq(userModel.findByGithub, user.github)
  .detect(function(error, returnedUser) {
    return returnedUser;
  })
  .run(callback);
};