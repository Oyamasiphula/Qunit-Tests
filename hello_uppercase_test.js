QUnit.test( "testing hello_uppercase function", function(assert){
	var result = hello_uppercase("hellooo");
	// is the result as we expected?
	 assert.equal("HELLOOO",result);

});