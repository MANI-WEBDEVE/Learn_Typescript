//* In Typescript, Object are used tp represent data with key-value pairs.Each key in the object is a string (or a symbol in ES6) that maps to a value.
var person = {
    name: 'HAZRAT MUHAMMAD S.A.W',
    age: 63,
    addreas: {
        city: 'MADINA',
        country: 'Saudia Arabe'
    }
};
var person1 = {
    name: 'HAZRAT ALI',
    age: 40,
    addreas: {
        city: 'MADINA',
        country: 'Saudia Arabe'
    }
};
var Laptop = {
    name: 'Laptop',
    price: 30000,
    quantity: 3,
    addrease: {
        city: 'karachi',
        Area: 'Korangi'
    }
};
//! Calculate Total Price 
//? Given the product object from the previous previous , write a function called calculateTotalPrice  that calculates and return  the total price (price * qunatity ) of the product 
var calculateTotalPrice = function (Laptop) {
    return " product total price of quantity is = ".concat(Laptop.price * Laptop.quantity);
};
console.log(calculateTotalPrice(Laptop));
