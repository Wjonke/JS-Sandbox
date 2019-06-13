// Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}
//-------------------------------------------------------------------------

function isEvenOrOdd(num) {
	if (num%2 === 0) {
		return 'even';
	}else{
		return 'odd';
	}
}