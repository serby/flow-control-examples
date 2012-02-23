var 
  userModel = require('../lib/userModel').createUserModel(),
  chain = require('../lib/flowy').chain;

module.exports.findMe = function(user, callback){

  chain()
  .link(userModel.findByName, user.name)
  .link(userModel.findByEmail, user.email)
  .link(userModel.findByGithub, user.github)
  .detect(function(error, returnedUser) {
    return returnedUser;
  })
  .run(callback);
};