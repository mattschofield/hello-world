var mocha = require('mocha')
  , should = require('should');

describe('test', function () {
	
	it('should work', function () {
		var one = 1;
    one.should.equal(1);
	});

  it('should be cool', function () {
    var yes = true;
    yes.should.be.ok;
  })

});
