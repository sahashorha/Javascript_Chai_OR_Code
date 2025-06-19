const accountId = 144553
let accountEmail = "rahul@gmail.com";
var accountPassword = "122345"
accountCity = "jaipur"
let accountState;
// accountId = 2; not allowed 
// Const declare for constants 
// { } -> scope 
/*
    Use only let and const -> and variable declare without datatype
    Prefer not to use var becouse of issue in block scope and functional scope 
    javascript -> undefined value are the type of value which is having not used any value
*/
console.log(accountId);
accountEmail = "hc@hc.com"
accountPassword = "34343";
console.table([accountId,accountCity, accountEmail, accountPassword,accountState]);
