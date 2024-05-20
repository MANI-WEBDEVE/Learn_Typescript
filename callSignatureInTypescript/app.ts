//* The function call signature refers to the decleration or definition of a function, which includes the function`s name, parameters,and return type. It defines the structure and type information of a function without including the function`s implementation or body. 

//? lets add one function inside the object. It`s more like creating a method in object

//? Very Important => call signature are typicaly used inside object type notation to describe the shape of function within object types

type Student = {
    name:string;
    age:string;
    gendar?:string;
    greet: (country:string) => string // method call signature
    //! (country?:string):string //* Pure call signature
}
const student1:Student={
    name:"Muhammad Inam",
    age:'18',
    greet: (country) : string => `Welcome My name is ${student1.name} and age is ${student1.age} & I am from ${country}`
}


const student2:Student={ 
    name:"Muhammad Tahir",
    age:'14',
    greet: (country) : string => `Welcome My name is ${student2.name} and age is ${student2.age} & I am from ${country}`
}

// const introducetion = (student1:Student) => {
//     const {name, age} = student1
//     return `Welcome to Gen Eng Era ${name} and you age is ${age}`
// }

// console.log(introducetion(student1))
console.log( student1.greet('pakistan'))
console.log( student2.greet('UK'))
  
// 