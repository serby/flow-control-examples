var
	user = require('./user');

module.exports.createUserModel = function() {
	
	function findByEmail(email, callback) {
		process.nextTick(function() {
			if (email === null) {
				callback(new Error('Email name must not be null'));
			} else {
				callback(null, email === user.email ? user : null);
			}
		});
	}

	function findByName(name, callback) {
		process.nextTick(function() {
			if (name === null) {
				callback(new Error('Name must not be null'));
			} else {
				callback(null, name === user.name ? user : null);
			}
		});
	}

	function findByGithub(github, callback) {
		process.nextTick(function() {
			if (github === null) {
				callback(new Error('github name must not be null'));
			} else {
				callback(null, github === user.github ? user : null);
			}
		});
	}

	return {
		findByEmail: findByEmail,
		findByName: findByName,
		findByGithub: findByGithub
	};
};