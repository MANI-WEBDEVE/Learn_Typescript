//! bigInt and Boolean Type In Typescript
// let bigNumber = 90071992547409913434
// let bigNumber:bigint = 9007199254740991n
let anotherNumber:bigint = 9007199254740991n
// let anotherNumber = 90071992547409913434
let bigNumber2 = BigInt('90071992547409923')
console.log(bigNumber2 * anotherNumber)  
console.log(bigNumber2- anotherNumber)  
console.log(bigNumber2 / anotherNumber)  
console.log(bigNumber2+ anotherNumber)  


//Now Boolean Example

const divisible = (a:number):boolean => {
    return a % 4 === 0 || a % 8 === 0

}
console.log(divisible(4))






