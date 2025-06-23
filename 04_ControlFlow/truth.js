const userEmail = "Rahul@gmail.com";
if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Dont haver user email");
}

// falsy values 
// false, 0, -0,BigInt 0n , "", null, undefined, NaN;
//truthy Values 
// "0", "false", " " -> string values are truthy values 
// funtion()( -> truthy values 
//)           

if(userEmail.length===0){
    console.log("Array is emepty ");
}

// objects are empty() ....
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

