class axis {
  x: number = 787;
  y: number;

  constructor(x: number, y: number) {
    (this.x = x), (this.y = y);
  }
}

//? Class Two and Inside constructor Overloading
class Square {
  lP: axis;
  

  // constructor(lPs:string, num:number)
  // constructor(lPs:axis, num:string)
  // constructor(lPs:any, num:any)
  // {
  //   this.lP = lPs
  //   this.num = num
  // }
  constructor(x:number, y:string);
  constructor(s:number);
  constructor(xs:any, y?:any){

  }
}
const sq1 = new Square(4)

//? Assertion Operator Class 3
// class Cookie {
//   name!: string;
//   type!:number;
// }

// const cookie1:Cookie = new Cookie()
// console.log(cookie1)

//? ReadOnly Properties Class 4

class ReadOnly {
  readonly name: string = "Muhammad Inam";
  age: number = 18;

  constructor(changeName?: string) {
    if (changeName !== undefined) {
      this.name = changeName;
    }
  }
  // error(name1:string){
  //   this.name = name1
  // }
  //* readonly property sirf constructor ka andar change ho sakte ha or Method ka andar nahi
}

const person1 = new ReadOnly();
// person1.name = "ksda" ---> Error hai edihar

console.log(person1);

const axis1: axis = new axis(12, 3);

// const sq1:Square = new Square(axis1, "lolo")


//? Class 5 Inheritance (Extend)
class AngleX {
  x:number;

  constructor(x:number){this.x = x}
}

class AngleY extends AngleX {
  y:number;


  constructor(y:number){
    super(7)
    this.y = y
  }

  calculateAngle(x:number, y:number){
    return x + y
  }
}

const angle1 = new AngleY(3)
console.log( 'lo' , angle1.calculateAngle(angle1.x, angle1.y ))
console.log(angle1.calculateAngle)