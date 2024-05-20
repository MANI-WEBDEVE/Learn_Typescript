//* The function call signature refers to the decleration or definition of a function, which includes the function`s name, parameters,and return type. It defines the structure and type information of a function without including the function`s implementation or body. 
var student1 = {
    name: "Muhammad Inam",
    age: '18',
    greet: function (country) { return "Welcome My name is ".concat(student1.name, " and age is ").concat(student1.age, " & I am from ").concat(country); }
};
var student2 = {
    name: "Muhammad Tahir",
    age: '14',
    greet: function (country) { return "Welcome My name is ".concat(student2.name, " and age is ").concat(student2.age, " & I am from ").concat(country); }
};
// const introducetion = (student1:Student) => {
//     const {name, age} = student1
//     return `Welcome to Gen Eng Era ${name} and you age is ${age}`
// }
// console.log(introducetion(student1))
console.log(student1.greet('pakistan'));
console.log(student2.greet('UK'));
// 
