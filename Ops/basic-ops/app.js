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
var axis = /** @class */ (function () {
    function axis(x, y) {
        this.x = 787;
        (this.x = x), (this.y = y);
    }
    return axis;
}());
//? Class Two and Inside constructor Overloading
var Square = /** @class */ (function () {
    function Square(xs, y) {
    }
    return Square;
}());
var sq1 = new Square(4);
//? Assertion Operator Class 3
// class Cookie {
//   name!: string;
//   type!:number;
// }
// const cookie1:Cookie = new Cookie()
// console.log(cookie1)
//? ReadOnly Properties Class 4
var ReadOnly = /** @class */ (function () {
    function ReadOnly(changeName) {
        this.name = "Muhammad Inam";
        this.age = 18;
        if (changeName !== undefined) {
            this.name = changeName;
        }
    }
    return ReadOnly;
}());
var person1 = new ReadOnly();
// person1.name = "ksda" ---> Error hai edihar
console.log(person1);
var axis1 = new axis(12, 3);
// const sq1:Square = new Square(axis1, "lolo")
//? Class 5 Inheritance (Extend)
var AngleX = /** @class */ (function () {
    function AngleX(x) {
        this.x = x;
    }
    return AngleX;
}());
var AngleY = /** @class */ (function (_super) {
    __extends(AngleY, _super);
    function AngleY(y) {
        var _this = _super.call(this, 7) || this;
        _this.y = y;
        return _this;
    }
    AngleY.prototype.calculateAngle = function (x, y) {
        return x + y;
    };
    return AngleY;
}(AngleX));
var angle1 = new AngleY(3);
console.log('lo', angle1.calculateAngle(angle1.x, angle1.y));
console.log(angle1.calculateAngle);
