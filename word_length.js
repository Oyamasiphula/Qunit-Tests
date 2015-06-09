function word_length(sentence){
 var avgLength = sentence.split(" ").join("").length /  sentence.split(" ").length;
 
 var averages = {
			roundedUp: Math.ceil(avgLength),
			roundedDown: Math.floor(avgLength)
	}
	
 return  averages;
};