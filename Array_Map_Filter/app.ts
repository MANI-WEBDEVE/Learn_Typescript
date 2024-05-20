//* Map and Filter in Array in Typescript

const numbers: number[] = [1, 2, 4, 5, 6, 7, 8, 9];

//! Map Method 

// The map method creates a new array by applying a provided function to each elements of the original array. It transforms each element and return a new array with the transformed values !

//* Doubling Each Numbers !

let newNumber: number[] = numbers.map((val: number) => {
    return val * 2
})
// console.log(newNumber)

//* Coverting numbers in String

const convertString: string[] = numbers.map((curVal: number) => {
    return curVal.toString()
})
console.log(convertString)


//! Filter Method
//? 1: Filtering even numbers

const evenNumbers: number[] = numbers.filter((curVal: number) => {
    return curVal % 2 === 0
})
console.log(evenNumbers)

//? 2: Filtering numbers greater than 3

const greaterNumber: number[] = numbers.filter((cuVal: number) => {
    return cuVal > 7
}
)
console.log(greaterNumber)

//! solve this question map method

//* Given an Array of strings representing names, create anew array that contains the upperCase version of each name

let namesUser: string[] = ["muhammad", "inam", 'tahir']

let upperCaseUers: string[] = namesUser.map((curVal: string) => {
    return curVal.toUpperCase()
})
console.log(upperCaseUers)


//* Given an array of numbers, create a new  array that contains the square of each number

let squareNum: number[] = numbers.map((curVal: number) => {
    return curVal ** 2
})
console.log(squareNum)

//! solve This question Filter method

//* Given an array of strings, create a new array that contains only the the strings with alength greater than 4.

const names: string[] = ['inam', 'muhammad', 'saad', 'tahir', 'habib', 'raza', 'ahad']

let fourCaracterName: string[] = names.filter((curVal: string) => {
    for (let i = 0; i < curVal.length; i++) {
        // console.log(curVal[i])
        if (curVal.length >= 4 && curVal.length === 4) {
            return curVal[i]
        }
    }
})
console.log(fourCaracterName)

//* Given an array of strings, filter out the names that start with the letter 'A'

let firstLetterA: string[] = names.filter((curVal: string) => {
    for (let i = 0; i < curVal.length; i++) {
        if (curVal.charAt(0).toUpperCase() === "A") {
            return curVal
        }
    }
})
console.log(firstLetterA)