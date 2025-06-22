const user = {
    username : "Rahul",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
    }
}
console.log(this);
// // this is only used in current context 
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();


// this is only used in object not in function  -> 
// function chai(){
//     let username = "rahul"
//     console.log(this.username);
    
// }
// chai();


// const chai = function (){
//     let username = ' rahuil';
//     console.log(this.username);
// }
// chai();

// const chai = () =>{
//     let username = " Rahul"
//     console.log(this.username);
// }


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1,num2) =>  (num1 + num2)
// console.log(addTwo(3,4));

const addTwo = (num1,num2) =>  ({username : "hithesh"});
console.log(addTwo(3,4));

const myArray = [2,3,4,5];
// myArray
