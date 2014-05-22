var mocha = require('mocha')
  , should = require('should');

describe('test', function () {
	
	it('should work', function () {
		var one = 1;
    one.should.equal(1);
	})

  it('should be cool', function () {
    var yes = true;
    yes.should.be.ok;
  })

  it('should be funky', function () {
    var array = [1,2,3];
    array.length.should.be.equal(3);
  })

});
