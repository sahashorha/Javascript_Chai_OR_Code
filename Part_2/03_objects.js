// singleton -> 

// object literals 
// Object.create 

const mySum = Symbol["Boys"]
const user = {
    name:"Rahul",
    age : 34,  
    [mySum] :"myKey1",
    location : "Jamshedpur",
    email : "rahul@gmail.com",
    isLoggedIn : false,
    LastlloginDays : ['Monday',"Tueday"]
}
// ?console.log(user.name);

// console.log(user[mySum]);
// user.email = "chat@gmail.com";
// console.log(user.email);
// Object.freeze(user);
// user.email = "rahulpoddar@gmail.com",
// console.log(user.email)
// console.log(user);
// normal function accessed by using the -> javascript notations 
user.greeting = function(){
    console.log("Rahul Poddar Function");
}
user.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());

// Symbol is accessed using bracket 

// value accessed by the using . , 
// squar using [] -. 
// myArray = ["h",'   i'];