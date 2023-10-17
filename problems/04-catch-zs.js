/***********************************************************************
Write a function, `catchZs` that takes in an arbitrary number of words,
and returns the total count of how many times the letter "z" can be found
at the beginning or end of a word.

Examples:

catchZs("fizz", "buzz"); // 2
catchZs("time", "to", "go", "to", "the", "zoo"); // 1
catchZs("Zip", "Zap", "Zop"); // 3
catchZs("pizza"); // 0
catchZs("Zzzzzz"); // 2
***********************************************************************/

// Your code here
function catchZs(...words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let char = words[i]
        let char2 = char.length - 1;

         if (char[0].toLowerCase().includes('z') || char[char2].toLowerCase().includes('z')) {
            count++;
          }
         }

        return count;
    }


console.log(catchZs('fuzz', 'buzz'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = catchZs;
} catch(e) {
    module.exports = null;
}
