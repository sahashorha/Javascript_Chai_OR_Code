// function saymyName(){
//     console.log("Hello World 1")
//     console.log("Hello World 2")
//     console.log("Hello World 3")
//     console.log("Hello World 4")
//     console.log("Hello World 5")
// }
// saymyName();

function addTwoNumber(number1 , number2){

        // console.log(number1 + number2);
        return number1 + number2;
}
// console.log(addTwoNumber())
// addTwoNumber(3,4);
const calcualte = addTwoNumber(3,4);
console.log(calcualte);
console.log(`result : ${calcualte}`);


function loginUseMessage(username ="sam"){
    if(username === null){
        console.log("Please enter a username correctly");
        // return;
    }
    return `${username} just logged in`
}
// console.log(loginUseMessage("Rahul"));
// console.log(loginUseMessage())


function calculatteCarPrice(...num1){
    return num1;
}
console.log(calculatteCarPrice(200,300,400));


const user  = {
    username : "rahuil",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

// i can pass the object by the reference method 

handleObject({
    username : "sam",
    price : 399
})
const myNewArray = [200,300,400,500,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(myNewArray);