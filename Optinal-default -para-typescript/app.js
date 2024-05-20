"use strict";
//? Optional and Default Parameters:
//*    Typescript allows you to define optional and default parameters in functions. 
//*    Optional parameters are denoted by appending a ? symbol after the paramerter name,
//*    and default parameters are specified by providing a default value in the partameter decalaration
//! defaukt example
const defaultPara = (name, id = 1) => {
    return console.log(`employee name is ${name} and id is: ${id}`);
};
defaultPara("Muhammad Inam");
//! optiona parameter example
const optionalPara = (name, id) => {
    if (id) {
        return console.log(`the employee name is ${name} and id is ${id}`);
    }
    else {
        return console.log(`name is ${name}`);
    }
};
optionalPara('inam');
