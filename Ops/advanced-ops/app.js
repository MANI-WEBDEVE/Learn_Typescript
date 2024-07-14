var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//? Getter and Setter
var C = /** @class */ (function () {
    function C() {
        this._length = 0;
    }
    Object.defineProperty(C.prototype, "lengthGEt", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(C.prototype, "lengthSet", {
        set: function (length) {
            if (length > 0) {
                this._length = length;
                return;
            }
        },
        enumerable: false,
        configurable: true
    });
    return C;
}());
var c1 = new C();
var cc = (c1.lengthSet = -2);
//* console.log(cc);
// write gettter and setter world example
var Person = /** @class */ (function () {
    function Person() {
        this._age = 0;
    }
    Object.defineProperty(Person.prototype, "ageGet", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "ageSet", {
        set: function (age) {
            if (age > 0) {
                this._age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person();
p1.ageSet = -3;
//write a index singnature in Object oriented program
var IndecSign = /** @class */ (function () {
    function IndecSign() {
        this.myname = 4;
    }
    IndecSign.prototype.check = function (s) {
        return this[s];
    };
    return IndecSign;
}());
var index = new IndecSign();
var Human = /** @class */ (function () {
    function Human() {
        this.name = "Inam";
        this.age = 18;
    }
    Human.prototype.calculateAge = function (num) {
        if (num === void 0) { num = 18; }
        return (this.age = num);
    };
    return Human;
}());
var H1 = new Human();
H1.calculateAge();
// Classes Extends
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (num) {
        return "".concat(this.name, " move ").concat(num, "m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function (time) {
        for (var i = 0; i < time; i++) {
            if (time === time) {
                return 'woof woof';
            }
        }
    };
    return Dog;
}(Animal));
var dog = new Dog("dog");
dog.move(600);
var bark = dog.bark(9);
console.log(bark);
// console.log(dog.bark());
