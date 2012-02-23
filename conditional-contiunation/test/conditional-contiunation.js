var fs = require('fs')
  , assert = require('assert')
  , theUser = require(__dirname + '/../lib/user')
  , methodsPath = __dirname + '/../methods';

// Add the filename for your implementation here
fs.readdirSync(methodsPath).forEach(function(implementation) {

  var findMe = require(methodsPath + '/' + implementation).findMe;

  describe(implementation.replace('.js', '') + '#findMe', function() {
    it('should be able to find by name', function(done) {
      findMe({ name: 'Paul Serby'}, function(error, user) {
        user.should.equal(theUser);
        done();
      });
    });

    it('should be able to find by email address', function(done) {
      findMe({ email: 'paul.serby@clock.co.uk'}, function(error, user) {
        user.should.equal(theUser);
        done();
      });
    });

    it('should be able to find by github', function(done) {
      findMe({ github: 'serby'}, function(error, user) {
        user.should.equal(theUser);
        done();
      });
    });

    it('should not be able to find "bad input" as name', function(done) {
      findMe({ name: 'bad input'}, function(error, user) {
        assert.notEqual(user, theUser);
        done();
      });
    });

    it('should not be able to find "bad input" as email', function(done) {
      findMe({ email: 'bad input'}, function(error, user) {
        assert.notEqual(user, theUser);
        done();
      });
    });

    it('should not be able to find "bad input" as github', function(done) {
      findMe({ github: 'bad input'}, function(error, user) {
        assert.notEqual(user, theUser);
        done();
      });
    });

    it('should error with a null name', function(done) {
      findMe({ name: null }, function(error, user) {
        error.should.be.an.instanceof(Error);
        done();
      });
    });
  });

});