// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

// Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
function isEvenOrOdd(num) {
	if (num%2 === 0) {
		return 'even';
	}else{
		return 'odd';
	}
}

// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if(num <= 0){
    return true;
  } else{
		return false;
	}
}

// Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.

function ctoa(c) {
	return c.charCodeAt(0);
}

// Check String for Spaces
// Create a function that returns true if a string contains any spaces.

//const hasSpaces = str => str.includes(" ");
	function hasSpaces(str) {
    return str.includes(' ')
  }


  // Is the Word Singular or Plural?
  // Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

  function isPlural(word) {
    return word.endsWith("s");
  }
