"use strict";
//? Any and unknown types
//todo: any type example
let name1 = "Muhammad";
name1 = 98; //Type 'number' is not assignable to type 'string' --> resolve the error to define {any } type
//todo: unknown type example
let myCode;
myCode = "pakistan";
myCode = 1234;
myCode = true;
if (typeof myCode === 'string') {
    console.log("india");
}
else if (typeof myCode === 'number') {
    console.log('786786');
}
else {
    console.log('lol');
}
//! unknown useCase
//? The unknown type is a safer alternative to any because it still enforces type checking and type safety
//? Variable of type unknown can hold values of any type, but you must peroform type checks or type assertions before using them in specific ways
//! UseCases 
// Working with Dynamic Data: When dealing with data from dynamic sources like user inputs, network, or desserialized JSON objects, the any type can be useful.
// Migration from Javascript: When migration an existing Javascript code base to typescript, using the any type can be a convenient way to quickly annotate variable and functions without immediately speciying theri prices here
