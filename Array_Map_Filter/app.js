//* Map and Filter in Array in Typescript
var numbers = [1, 2, 4, 5, 6, 7, 8, 9];
//! Map Method 
// The map method creates a new array by applying a provided function to each elements of the original array. It transforms each element and return a new array with the transformed values !
//* Doubling Each Numbers !
var newNumber = numbers.map(function (val) {
    return val * 2;
});
// console.log(newNumber)
//* Coverting numbers in String
var convertString = numbers.map(function (curVal) {
    return curVal.toString();
});
console.log(convertString);
//! Filter Method
//? 1: Filtering even numbers
var evenNumbers = numbers.filter(function (curVal) {
    return curVal % 2 === 0;
});
console.log(evenNumbers);
//? 2: Filtering numbers greater than 3
var greaterNumber = numbers.filter(function (cuVal) {
    return cuVal > 7;
});
console.log(greaterNumber);
//! solve this question map method
//* Given an Array of strings representing names, create anew array that contains the upperCase version of each name
var namesUser = ["muhammad", "inam", 'tahir'];
var upperCaseUers = namesUser.map(function (curVal) {
    return curVal.toUpperCase();
});
console.log(upperCaseUers);
//* Given an array of numbers, create a new  array that contains the square of each number
var squareNum = numbers.map(function (curVal) {
    return Math.pow(curVal, 2);
});
console.log(squareNum);
//! solve This question Filter method
//* Given an array of strings, create a new array that contains only the the strings with alength greater than 4.
var names = ['inam', 'muhammad', 'saad', 'tahir', 'habib', 'raza', 'ahad'];
var fourCaracterName = names.filter(function (curVal) {
    for (var i = 0; i < curVal.length; i++) {
        // console.log(curVal[i])
        if (curVal.length >= 4 && curVal.length === 4) {
            return curVal[i];
        }
    }
});
console.log(fourCaracterName);
//* Given an array of strings, filter out the names that start with the letter 'A'
var firstLetterA = names.filter(function (curVal) {
    for (var i = 0; i < curVal.length; i++) {
        if (curVal.charAt(0).toUpperCase() === "A") {
            return curVal;
        }
    }
});
console.log(firstLetterA);
