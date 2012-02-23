var
	user = require('./user');

module.exports.createUserModel = function() {
	
	function findByEmail(email) {
		return email === user.email ? user : null;
	}

	function findByName(name, callback) {
		return name === user.name ? user : null;
	}

	function findByGithub(github, callback) {
		return github === user.github ? user : null;
	}

	return {
		findByEmail: findByEmail,
		findByName: findByName,
		findByGithub: findByGithub
	};
};