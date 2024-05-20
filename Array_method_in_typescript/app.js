//* Arrays in Typescript come with built-in methods that alow to perform common operator
var Users = ['Muhammad', 'Inam', 'Tahir', 'Habib', 'Raza'];
// ab hum { Muzzammil } user ko add karna chata ha to do in build method ha ek Push and Shift
var newUserAdd = Users.push("Muzzammil");
var newUserAdd2 = Users.unshift("Ocama");
console.log("push: ".concat(newUserAdd));
console.log("unshift: ".concat(newUserAdd2));
console.log("unshift: ".concat(Users));
//* Agar ab ki user ko delete krana ha tu kiya kara ga us ki bhi do method ha first One agar ap start sa user delete kar na charah ha tu { shift } method ha or agar ap last sa delet karna charaha ha tu { pop } method ha !
var deleteUser1 = Users.shift();
var deleteUser2 = Users.pop();
console.log("shift: ".concat(newUserAdd));
console.log("pop: ".concat(newUserAdd));
console.log(Users);
//! Iteration error elements:
//? You can iterate over the elements of an array various looping constructs such as for ... of, array methods like forEach
// Using for loop
for (var i = 0; i < Users.length; i++) {
    console.log(Users[i]);
}
// using for ... of loop
for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
    var User = Users_1[_i];
    console.log(User);
}
// using for ... in loop
for (var userIndeces in Users) {
    console.log(userIndeces);
}
// using forEach method
Users.forEach(function (curUsers) {
    console.log(curUsers);
});
