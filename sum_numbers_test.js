QUnit.test("Testing sum_numbers function" ,function(assert){
	//*the 5 is just referenced as n from our function's parameter and it also represent internal feedback [results()] 
	var result = sum_numbers(5);
	//*is the result the same as expected?
	assert.equal(result.toString(),[1+2+3+4+5].toString());
	//*[1+2+3+4+5].toString()); and The toString() method returns a string representing object!
});