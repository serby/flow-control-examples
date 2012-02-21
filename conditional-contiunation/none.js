var
  userModel = require('../lib/userModel').createUserModel();

module.exports.findMe = function(user, callback){

  var fns = [
    userModel.findByEmail.bind(this, user.email),
    userModel.findByName.bind(this, user.name),
    userModel.findByGithub.bind(this, user.github),
    function() {
      return callback(undefined, null);
    }
  ];

  function detect(error, user) {
    if (error || user) {
      return callback(error, user);
    }
    fns.shift()(detect);
  }

  detect();
};