function shortest_word(sentence){
	var str = sentence.split(" ");
	var word = "";
for(var x = 0; x < str.length; x++){
	word = str[x];
	for(var i = 0; i < str.length; i++){
		if(word.length > str[i].length){
			word = str[i];
		}
	}
}
return word +","+ word.length;
}




