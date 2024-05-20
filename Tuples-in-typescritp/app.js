//* In typescript, tuples are a data structure that allows you to store afixed-size collection of elements of sifferent types. They are similar to arrays, but with a key difference: the types of  elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the type, and their size can very.
var displayPersonDislay = function (person) {
    var name = person[0], age = person[1], student = person[2], programmer = person[3];
    console.log("Name is : ".concat(name, " age is ").concat(age, " and your student ").concat(student ? 'yes' : 'no', " and you ").concat(programmer));
};
var personStudent = ['Muhammad', 18, true, 'Programmer'];
console.log(displayPersonDislay(personStudent));
