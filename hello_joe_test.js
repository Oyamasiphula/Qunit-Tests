QUnit.test("test hello joe function",function(assert){
		var result = hello_joe('joe');
		//is the result as we expected?
		assert.equal("Hello",result);

});
QUnit.test("test hello joe function",function(assert){
		var result = hello_joe('bob');
		//is the result as we expected?
		assert.equal("Hello",result);

});
QUnit.test("test hello joe function",function(assert){
		var result = hello_joe('oyama');
		//is the result as we expected?
		assert.equal("Hello, oyama",result);

});