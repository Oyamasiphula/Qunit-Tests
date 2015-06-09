function avg(sentence){
	var avg = sentence.split(" ").join("").length / sentence.split(" ").length;
	return Math.ceil(avg);
}	