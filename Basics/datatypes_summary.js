// Data types categorised -> Data memory and data access 
// #Primitive datatype and #reference Datatype 
// Primitive datatype 
// 7 types -> string , Number , Boolean , null , symbol, undefined , BigInt

// const score = 100;
// const scoreValue = 100.3; -> decimal float 
// // const isLoggedIn = false; -> Boolean
// const Outsidetemp = null;- > empty() 
// let userEmail; -> undefined 

const id = Symbol('123');
const anotherid = Symbol('123')

// console.log(id === anotherid);

// const BigNumber = 333333333333n; -> n repersent BigInt

// Reference Type -> Non Primitive 

// Master javascript -> Browser events and Objects

// Arrsys, Objects , funtion

const heroes = ["shaktimaan","naagraj","doga"]
let myobj = {
    name : "Hitesh",
    age :22,
}

// variable type of function(){
//     console.log("Hello World");
// }
// find the datatype of variable 
// // Datatype and its typeof ->
// function -> function
// Null -> Object
// without variable -> undefined 
// symbol -> symbol 

// All the Non primitive datatype -> Having the object type of  

// console.log(typeof anotherid );

// **********************************************************************

// stack -> Primitive type of data -> change in Copy
// Heap -> Non Primitive type of data -> change in orignal
let mygoal = "Rahul Poddar";
let anotherName = mygoal;
// anotherName = 'chai or code'; // copy
console.log(anotherName);
console.log(mygoal)

let userOne = {
    email : " user@google.com",
    upi :"user@ybl",
}
let userTwo = userOne
// userOne passes the same reference of the element -> that's why it is
// not changing the element
userTwo.email = "rahulPoddar.com";
console.log(userOne.email);
console.log(userTwo.email);

// string concept -> 