//* In typescript, tuples are a data structure that allows you to store afixed-size collection of elements of sifferent types. They are similar to arrays, but with a key difference: the types of  elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the type, and their size can very.

//? Real-life example of using tuples in typescript

//? let`s consider a scenario where you want to represent  a person`s basic information including theri name name , age, and whether they have a driver1s license. using a tuple can be an appropriate chioce cecause these three elemrnts have a specific order and type.


//* tuple syntex

type PersonInfo = readonly [string, number, boolean, string]

const displayPersonDislay = (person: PersonInfo) => {
    const [name, age, student, programmer] = person
    console.log(`Name is : ${name} age is ${age} and your student ${student ? 'yes' : 'no'} and you ${programmer}`)
}



const personStudent: PersonInfo = ['Muhammad', 18, true, 'Programmer']

console.log(displayPersonDislay(personStudent))