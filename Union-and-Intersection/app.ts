//? Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type.In 
//* In Typescript , when using a union type, it is essnetial to ensure that at least one of the types in the union includesm all the required properties. Failiure  to do so will result in a types error during compliation.


//* Practice, well create a function that can accept different types of arguments and perform differnet actions based on the type of the input Suppose we want to create a function that double the value if the input number, or converts the input to upperCsae if it`s a string. to age we can use aunion type to allow the fubnction to accept both number string.

// const inputUser = (value: string | number):string | number => {
//     if (typeof value === 'number') {
//         return value * 2
//     } else if (typeof value === 'string') {
//         return value.toUpperCase()
//     } else {
//       throw new Error(message: "invalide Token")
//     }
// }

// console.log(inputUser('muhammad' ))
// console.log(inputUser(2))



const formatWay = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.charAt(0).toUpperCase() + value.slice(1)

    } else if (typeof value === 'number') {
        return `${value / 2} $`
    } else if (typeof value === 'boolean') {
        return value ? 'yes' : 'no'
    }
}


console.log(formatWay("muhammad"))
console.log(formatWay(false))
console.log(formatWay(2))


//* intersection method

type userInfo = {
    name:string,
    age:number,
    adult: boolean

}


type EmployeeInfo = {
    emp_id : number,
    categiroy: string,
    deparetment: string
}


type EmployeDetail2 = userInfo & EmployeeInfo


const employee:EmployeDetail2 = {
    name:'Inam',
    age:18,
    adult:true,
    emp_id :900,
    categiroy:"Gen Eng",
    deparetment:"Microsoft"

}

//* practice: Create User Profile
//* You are given two Typescript type: User and MyLocation. The User type represents basic user information , while the MyLocation type contains details about the user`s location. create a function called createUserProfile that takes a User object and a MyLocation object as arguments and prints the user`s name and the city they are from

type UserInfo = {
    name:string;
    age:number
}

type UserLocation = {
    city:string,
    country:string
}

const userPersonalInfo:UserInfo = {
    name:'Muhammad Inam',
    age:18
}
const UserLocationInfo: UserLocation ={
    country:"Pakistan",
    city:"Karachi"
}

const infoCreate = (userPersonalInfo:UserInfo, UserLocationInfo:UserLocation) => {
    return { ...userPersonalInfo, ...UserLocationInfo}
}

const completeInfo: UserInfo & UserLocation = infoCreate(userPersonalInfo, UserLocationInfo)

console.log(completeInfo)