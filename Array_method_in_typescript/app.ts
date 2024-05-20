//* Arrays in Typescript come with built-in methods that alow to perform common operator

const Users:string[] = ['Muhammad', 'Inam', 'Tahir', 'Habib', 'Raza']

// ab hum { Muzzammil } user ko add karna chata ha to do in build method ha ek Push and Shift

let newUserAdd = Users.push("Muzzammil")
let newUserAdd2 = Users.unshift("Ocama")

console.log(`push: ${newUserAdd}`)
console.log(`unshift: ${newUserAdd2}`)

console.log(`unshift: ${Users}`)

//* Agar ab ki user ko delete krana ha tu kiya kara ga us ki bhi do method ha first One agar ap start sa user delete kar na charah ha tu { shift } method ha or agar ap last sa delet karna charaha ha tu { pop } method ha !

let deleteUser1 = Users.shift()
let deleteUser2 = Users.pop()

console.log(`shift: ${newUserAdd}`)
console.log(`pop: ${newUserAdd}`)

console.log(Users)

//! Iteration error elements:
//? You can iterate over the elements of an array various looping constructs such as for ... of, array methods like forEach


// Using for loop

for(let i = 0; i < Users.length; i++) {
    console.log(Users[i])
}

// using for ... of loop

for(const User of Users) {
    console.log(User)
}

// using for ... in loop

for(const userIndeces in Users ) {
    console.log(userIndeces)
}

// using forEach method


Users.forEach((curUsers:string) => {
    console.log(curUsers)
})



