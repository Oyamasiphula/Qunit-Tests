QUnit.test("Testing number_list function", function(assert){
	var result = number_list(5);
	//Are the results as expected?
	assert.equal(result.toString(),[1,2,3,4,5].toString());

}); 

