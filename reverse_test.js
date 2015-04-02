QUnit.test("test reverse function",function(assert){
		var result = Reverse('siphula');
		//is the result as we expected?
		assert.equal(['a','l','u','h','p','i','s'].toString(),result);
	});