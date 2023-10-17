/***********************************************************************

Write a function  `uniqueKeys` that accepts two objects and returns an array of
keys that are present in the first object but not in both objects.

Examples:

const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
uniqueKeys(cat, human); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
uniqueKeys(guitar, drums); // ['strings']
***********************************************************************/

function uniqueKeys(obj1, obj2) {
    // Your code here
    let newArr = [];
        for (let i = 0; i < obj1.length; i++) {
            for (let j = 0; j < obj2.length; j++) {
            let firstKeys = Object.keys(obj1[i]);
            let secondKeys = Object.keys(obj2);
        if (!firstKeys.includes(secondKeys)) {
            newArr.push(firstKeys);
        }
    }
}

    return newArr;
}

const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
console.log(uniqueKeys(cat, human)); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
uniqueKeys(guitar, drums); // ['strings']


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = uniqueKeys;
