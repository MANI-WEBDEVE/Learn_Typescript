//? Getter and Setter
class C {
  protected _length: number = 0;

  public get lengthGEt(): number {
    return this._length;
  }

  set lengthSet(length: number) {
    if (length > 0) {
      this._length = length;
      return;
    }
  }
}

const c1: C = new C();
let cc = (c1.lengthSet = -2);
//* console.log(cc);

// write gettter and setter world example
class Person {
  private _age: number = 0;

  public get ageGet(): number {
    return this._age;
  }

  set ageSet(age: number) {
    if (age > 0) {
      this._age = age;
    }
  }
}

const p1: Person = new Person();
p1.ageSet = -3;

//write a index singnature in Object oriented program
class IndecSign {
  [s: string]: number | ((s: string) => number);

  myname = 4;
  check(s: string) {
    return this[s] as number;
  }
}

const index: IndecSign = new IndecSign();
// console.log(index.check("myname"));

// interface Type How defined
interface MultiType {
  name: string;
  age: number;
  calculateAge(num: number): number;
}

class Human implements MultiType {
  name: string = "Inam";
  age: number = 18;

  calculateAge(num: number = 18): number {
    return (this.age = num);
  }
}

const H1: Human = new Human();
H1.calculateAge();

// Classes Extends

class Animal {
  name!: string;

  constructor(name: string) {
    this.name = name;
  }

  move(num:number){
    return `${this.name} move ${num}m`;
  }
}

class Dog extends Animal {
  constructor(name:string){
    super(name)
  }
  bark(time:number){
    for(let i = 0; i < time; i++){
      if (time === time){
        return 'woof woof'
      }
    }
  }
}

const dog:Dog = new Dog("dog");
dog.move(600);
let bark = dog.bark(9)
// console.log(bark);

// Public, Private, and Protected Access Modifiers
class Cont {
 public greet (name:string){
  console.log("hello everyOne")
 }
 protected greet1 (name:string){
  console.log("hello everyOne")
 }
  
}

class Cont2 extends Cont {

  public greet2 (name:string){
    super.greet1(name)
  }
}

const G1:Cont2 = new Cont2();
// G1.greet1('Inam') --> error protected not make outside class Object 

