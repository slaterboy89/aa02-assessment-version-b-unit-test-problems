/***********************************************************************
Write a function called `pushCreator` that accepts an array.
The pushCreator function will return a new function that will allow
us to create new separate custom pushing functions.


Examples:

const addToArray = pushCreator(['hello']); // returns a function
addToArray('world'); // ['hello', 'world'];

const addToArray2 = pushCreator([]); // returns a function
addToArray2({'hello': 'world'}); // [{ 'hello': 'world' }]

const addToArray3 = pushCreator(['48 65 6c 6c 6f']); // returns a function
addToArray3('77 6f 72 6c 64'); // ['48 65 6c 6c 6f', '77 6f 72 6c 64']

***********************************************************************/

function pushCreator(arr) {
  // Your code here
 function newFunc() {

 }
 return newFunc;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pushCreator;
