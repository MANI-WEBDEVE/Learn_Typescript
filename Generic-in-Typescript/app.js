//* Generics in Typescript allow you to create reusable components or function that can work with multiple data types.
//? Arrow function
var Generics = function (values) {
    return values;
};
//? simple function
function Genericss(values) {
    return values;
}
console.log(Generics(100));
console.log(Generics("MUHAMMAD"));
console.log(Generics(true));
// ! Here is the function overloading Example? 
// function add (a:number, b:number):number
// function addDtruing (a:string, b:string):string
// function addNumberAndString (a:any, b:any):any {
// return a + b
//}
// this problem solve Generics in Typescript
// const addition = <T extends number | boolean | string>(a: T, b: T): T => {
//     if (typeof a === 'number' && typeof b === 'string') {
//         return (a + b) as T
//     } else if (typeof a === 'string' && typeof b === 'string') {
//         return `${a.concat(b)}` as T
//     } else {
//         throw new Error("INVALID CODE")
//     }
// }
// console.log(addition<number>(10, 10))
// console.log(addition<string>('Muhammad', 'inam'))
function additionto(a, b) {
    if (typeof a === 'number' && typeof b === 'string') {
        return (a + b);
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return "".concat(a.concat(b));
    }
    else {
        throw new Error("INVALID CODE");
    }
}
console.log(additionto(2, ' mani'));
