//* In Typescript, Object are used tp represent data with key-value pairs.Each key in the object is a string (or a symbol in ES6) that maps to a value.

//! In Typescript, a type alias is a way to given a name to a specific type or combination of types. It allows you to  create a custom name for  a type, making it eaiser to reuse and refer to the same type in different parts of your code. Type aliases provide better readibility, orginization, and abstraction of complex types

//* To define a type alias, you use the type keyword followed by the alias name and the type defination !

//? Let`s consider a real-life example of representing a person`s information using Typescript objects 
//? 🤵 -> name, age, isStudent , addreaswe city, country

//! Type Alias Syntex Sugar

type Person = {
    name: string;
    age: number;
    addreas: {
        city: string;
        country: string;
    }
}




const person: Person = {
    name: 'HAZRAT MUHAMMAD S.A.W',
    age: 63,
    addreas: {
        city: 'MADINA',
        country: 'Saudia Arabe'
    }
}

const person1: Person = {
    name: 'HAZRAT ALI',
    age: 40,
    addreas: {
        city: 'MADINA',
        country: 'Saudia Arabe'
    }
}
 
//Todo: Create a Product Object
//? Define an interface or type representing a product with properties for  name , Price, Quantity.
//* Create  a product object with the following  data
// Name: "Laptop",
// Price: 20000,
// Quantity: 6
// addrease: {}

type Products = {
    name:string;
    price:number;
    quantity: number;
    addrease:{
        city:string;
        Area:string;
    }
}

const Laptop:Products = {
    name:'Laptop',
    price:30000,
    quantity:3,
    addrease:{
        city:'karachi',
        Area:'Korangi'
    }

}

//! Calculate Total Price 
//? Given the product object from the previous previous , write a function called calculateTotalPrice  that calculates and return  the total price (price * qunatity ) of the product 

const calculateTotalPrice = (Laptop:Products) => {
    return ` product total price of quantity is = ${Laptop.price * Laptop.quantity}`
}
console.log(calculateTotalPrice(Laptop))