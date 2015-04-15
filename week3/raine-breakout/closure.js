// function practice
// closure
// statements vs expressions
// function best practices
// procedural style vs functional style

// closure is the ability of a function to hold onto a variable that was declared in an outer scope (which may have ended!)

/*
$(function() {

	var a = 10;

	// we can say "next has closure over a"
	var next = function() {
		return a+1;
	};

	console.log(next());

})
*/


// create a function called makeVocalist that returns a vocalist object
// this vocalist object has a sing method, which should return "do" the first time it is called, "re" the second time, "me" the third time, etc

var notes = ['do', 're', 'me', 'fa', 'so', 'la', 'ti'];

var makeVocalist = function() {

	var a = 10;
	var currentNoteIndex = 0;

	return {
		// sing has closure over currentNoteIndex
		sing: function() {
			var note = notes[currentNoteIndex];
			currentNoteIndex++; // currentNoteIndex = currentNoteIndex + 1
			currentNoteIndex %= 7;
			/*
			if(currentNoteIndex === 8) {
				currentNoteIndex = 0;
			}*/

			return note;
		}
	};

};



var maria = makeVocalist();
console.log(maria.sing()); // do
console.log(maria.sing()); // re
console.log(maria.sing()); // me

var frederick = makeVocalist();
console.log(frederick.sing()); // do
console.log(frederick.sing()); // re

console.log(maria.sing()); // fa
/*
console.log(maria.sing()); // so
console.log(maria.sing()); // la
console.log(maria.sing()); // ti
console.log(maria.sing()); // do
console.log(maria.sing()); // re
console.log(maria.sing()); // me
*/


