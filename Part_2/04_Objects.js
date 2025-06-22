const tinderUser = new Object(); //-> singleton objects 

console.log(tinderUser);
tinderUser.id ="34sdf";
tinderUser.name = "rahult" 
tinderUser.isLoggedIn = false;
console.log(tinderUser);;

// creating objects , nested objects 
const regularUser= {
    email : "sonemone@gmail.com",
    fullname :{
        userFullName :{
            firstname : "rahul",
            lastname : "Poddar"
        }
    }
}
// the method how we are finding the values in nested functions 
// console.log(regularUser.fullname.userFullName.firstname);
// objects inside object is accessed thorough . nesting 

const obj1 = {
    1:"a",
    2 :"b"
}
const obj2 = {
    3:"a",
    4 :"b"
}

// how we are joined to the const -> by using the assign objects
// const obj3 = {obj1 , obj2}
// console.log(obj3);
const obj3 = Object.assign({},obj1, obj2);

console.log(obj3);
// This is another method is also used obj1 , obj2 bny the dot method             

const obj4 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id:1,
        email:"rahui@gmail.com",
    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderUser);
// from database this date come in this format -> 
// object of arrays 
// finding in the keys of the object 
console.log(Object.keys(tinderUser));
// finding the values of the keys
console.log(Object.values(tinderUser));

// finding the entries of the objects 
console.log(Object.entries(tinderUser));
// finding the what property is used 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



