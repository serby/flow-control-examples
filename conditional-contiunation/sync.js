var userModel = require('../lib/userModelSync').createUserModel();

module.exports.findMe = function(user, callback){
  try {

    callback(null, 
      userModel.findByEmail(user.email) || 
      userModel.findByName(user.name) || 
      userModel.findByGithub(user.github));

  } catch (e) {
    callback(e);
  }
};