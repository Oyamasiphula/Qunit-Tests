function longest_word(sentence){
	var str = sentence.split(" ");
	var longest = 0;
	var word = false;
str.forEach(function(str){
if (longest < str.length){
	longest = str.length;
	word = str;
}

});
return word;

}