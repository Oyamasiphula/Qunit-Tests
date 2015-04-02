QUnit.test("testing upper function",function(assert){
	var result = upper('OYAMA');

	assert.equal(result,"oyama".toUpperCase());
});