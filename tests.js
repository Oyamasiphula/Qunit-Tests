QUnit.test("testing hello world function", function(assert){
	
		 var result = hello();
    	// is the result as we expected?
    	assert.equal("hello world", result);
}); 

QUnit.test( "testing hello_uppercase function", function(assert){
	var result = hello_uppercase("hellooo");
	// is the result as we expected?
	 assert.equal("HELLOOO",result);
});
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
QUnit.test("Testing number_list function", function(assert){
	var result = number_list(5);
	//Are the results as expected?
	assert.equal(result.toString(),[1,2,3,4,5].toString());
}); 
QUnit.test("Testing sum_numbers function" ,function(assert){
	//*the 5 is just referenced as n from our function's parameter and it also represent internal feedback [results()] 
	var result = sum_numbers(5);
	//*is the result the same as expected?
	assert.equal(result.toString(),[1+2+3+4+5].toString());
	//*[1+2+3+4+5].toString()); and The toString() method returns a string representing object!
});

QUnit.test("testing length function", function(assert){
	var string = "oyama";
var result = length(string);
//*is the result the same as expected?
assert.equal(result,5);
})

QUnit.test("test upper function",function(assert){
		var string = "siphula";
		var result = upper(string);
		//is the result as we expected?
		assert.equal("SIPHULA",result);
	});

QUnit.test("test reverse function",function(assert){
		var result = Reverse('siphula');
		//is the result as we expected?
		assert.equal(['a','l','u','h','p','i','s'].toString(),result.toString());
	});

QUnit.test("test hello list function",function(assert){
		var result = hello_list(2);
             // To test my code expected results  
        assert.equal("hello World hello World ",result);
});

QUnit.test("test high_low function",function(assert){
		var list = [2,3,4,90];
		var result = high_low(list);
             // To test my code expected results  
        assert.equal(90,result);
});

QUnit.test("test high_low function",function(assert){
		var list = [2,3,4,90];
		var result = low(list);
             // To test my code expected results  
        assert.equal(2,result);
});

QUnit.test("test count_words function",function(assert){        
	var result =
countWords("I was in mbekweni and I just saw a cat passing by and I was so scared!");              // To test my code expected results
assert.equal(17,result); 
});

QUnit.test("test sum_word_len function",function(assert){
var result =
sum_word("I was in mbekweni and I just saw a cat passing by and I was so scared!");  
             // To test my code expected results  
        assert.equal(70,result);
});