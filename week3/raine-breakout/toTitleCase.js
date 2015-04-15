// create a function that capitalizes the first letter in every word in a sentence
var toTitleCase = function(sentence) {

	var shortWords = ['is', 'a', 'the', 'or', 'and', 'but'];
	var words = sentence.split(' ');
	var capWords = [];

	for(var i=0; i<words.length; i++) {
		if(shortWords.indexOf(words[i]) !== -1) {
			capWords.push(words[i]);
		}
		else {
			var capWord = words[i][0].toUpperCase() + words[i].substring(1);
			capWords.push(capWord);
		}
	}

	return capWords.join(' ');
};

// Refactor #1: Convert for loop to map
var toTitleCase = function(sentence) {

	var shortWords = ['is', 'a', 'the', 'or', 'and', 'but'];
	var words = sentence.split(' ');

	var capWords = words.map(function(word) {
		if(shortWords.indexOf(word) !== -1) {
			return word;
		}
		else {
			var capWord = word[0].toUpperCase() + word.substring(1);
			return capWord;
		}
	});

	return capWords.join(' ');
};

// Refactor #2: Moved anonymous mapping function to a named function
var toTitleCase = function(sentence) {

	var shortWords = ['is', 'a', 'the', 'or', 'and', 'but'];
	var words = sentence.split(' ');

	var capitalizeWord = function(word) {
		if(shortWords.indexOf(word) !== -1) {
			return word;
		}
		else {
			var capWord = word[0].toUpperCase() + word.substring(1);
			return capWord;
		}
	};

	var capWords = words.map(capitalizeWord);

	return capWords.join(' ');
};

// Refactor #3: Replace if/else with ternary
var toTitleCase = function(sentence) {

	var shortWords = ['is', 'a', 'the', 'or', 'and', 'but'];
	var words = sentence.split(' ');

	var capitalizeWord = function(word) {

		return shortWords.indexOf(word) !== -1 ?
			word : 
			word[0].toUpperCase() + word.substring(1);

	};

	var capWords = words.map(capitalizeWord);

	return capWords.join(' ');
};

// Refactor #4: Increase performance of the short words lookup
var toTitleCase = function(sentence) {

	var shortWords = {'is': 1, 'a': 1, 'the': 1, 'or': 1, 'and': 1, 'but': 1 };
	var words = sentence.split(' ');

	var capitalizeWord = function(word) {

		return word in shortWords ?
			word : 
			word[0].toUpperCase() + word.substring(1);

	};

	var capWords = words.map(capitalizeWord);

	return capWords.join(' ');
};

// Refactor #5: Condense
var toTitleCase = function(sentence) {

	var shortWords = {'is': 1, 'a': 1, 'the': 1, 'or': 1, 'and': 1, 'but': 1, 'in': 1 };

	var capitalizeWord = function(word, i) {
		return i !== 0 && word in shortWords ?
			word : 
			word[0].toUpperCase() + word.substring(1);
	};

	return sentence
		.split(' ')
		.map(capitalizeWord)
		.join(' ');
};

console.log( toTitleCase('The only sentence in the world') );