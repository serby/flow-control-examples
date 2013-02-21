var Q = require('q');
var userModel = require('./userModel');

module.exports.createUserModel = function() {
	var user = userModel.createUserModel();
	return {
		findByEmail: Q.nfbind(user.findByEmail),
		findByName: Q.nfbind(user.findByName),
		findByGithub: Q.nfbind(user.findByGithub)
	};
};