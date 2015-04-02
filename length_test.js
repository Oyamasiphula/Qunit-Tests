QUnit.test("testing length function", function(assert){
var result = length([6,7,8,9,10]);
//*is the result the same as expected?
assert.equal(result.toString(),[5].toString());
});