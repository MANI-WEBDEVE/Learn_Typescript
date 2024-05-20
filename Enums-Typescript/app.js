//* Enums in TS
//? Enums in Typescript  are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient any to define a set of named values and associate them with specificmeaning
//* In typescript, whn enum constant are not explicitly assigned numeric alues, they are automatically assigned icremental numeric values starting from 0. the default numeric value for the first enum constant is 0,and subsequent enum constants recive alue icremented by 1.
//! Enum Syntex
var Roles;
(function (Roles) {
    Roles["user"] = "User";
    Roles["admin"] = "Admin";
})(Roles || (Roles = {}));
var User1 = {
    name: "Muhammad",
    email: 'Muhammad@gmail.com',
    roles: Roles.admin
};
var User2 = {
    name: "Muhammad Inam",
    email: 'Muhammad@gmail.com',
    roles: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, roles = user.roles;
    if (roles === 'Admin') {
        return "".concat(name, " you are added website");
    }
    else {
        return "".concat(name, " you are not allow to added webPage");
    }
};
console.log(isAdmin(User1));
console.log(isAdmin(User2));
