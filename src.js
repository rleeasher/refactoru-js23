// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/
var splice = function(arr, start, numToReplace, replace) {
  numToReplace = numToReplace || 0;
  replace = replace || [];
  var args = Array.prototype.slice.call(arguments);
  var randomargs = args.slice(4,args.length);
  arraystart = arr.slice(0,start);
  arrayend = arr.slice((start+numToReplace),arr.length);
  retarray = arraystart.concat(replace).concat(arrayend).concat(randomargs);
	return retarray;
};
