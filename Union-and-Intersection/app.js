//? Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type.In 
//* In Typescript , when using a union type, it is essnetial to ensure that at least one of the types in the union includesm all the required properties. Failiure  to do so will result in a types error during compliation.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//* Practice, well create a function that can accept different types of arguments and perform differnet actions based on the type of the input Suppose we want to create a function that double the value if the input number, or converts the input to upperCsae if it`s a string. to age we can use aunion type to allow the fubnction to accept both number string.
// const inputUser = (value: string | number):string | number => {
//     if (typeof value === 'number') {
//         return value * 2
//     } else if (typeof value === 'string') {
//         return value.toUpperCase()
//     } else {
//       throw new Error(message: "invalide Token")
//     }
// }
// console.log(inputUser('muhammad' ))
// console.log(inputUser(2))
var formatWay = function (value) {
    if (typeof value === 'string') {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else if (typeof value === 'number') {
        return "".concat(value / 2, " $");
    }
    else if (typeof value === 'boolean') {
        return value ? 'yes' : 'no';
    }
};
console.log(formatWay("muhammad"));
console.log(formatWay(false));
console.log(formatWay(2));
var employee = {
    name: 'Inam',
    age: 18,
    adult: true,
    emp_id: 900,
    categiroy: "Gen Eng",
    deparetment: "Microsoft"
};
var userPersonalInfo = {
    name: 'Muhammad Inam',
    age: 18
};
var UserLocationInfo = {
    country: "Pakistan",
    city: "Karachi"
};
var infoCreate = function (userPersonalInfo, UserLocationInfo) {
    return __assign(__assign({}, userPersonalInfo), UserLocationInfo);
};
var completeInfo = infoCreate(userPersonalInfo, UserLocationInfo);
console.log(completeInfo);
