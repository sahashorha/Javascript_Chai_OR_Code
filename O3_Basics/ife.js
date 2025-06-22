// immediately invoked function expression (IFE)
// NAMED IFE
(function chai(){
    console.log("DB CONNECTED")
})();
// () -> function defination () -> reference 
// global scope pollution se bachne ke liye hum ife ka use karete hai
// Global scope pollution se bachne ke liye hum ife 
// ka use karte hai immediately invoked 


// named ife
((name) => {
    console.log(`Db connected ${name}`)
})("Rahul")
// ;;;;;;;;
// ife needs a semicolon for ending the first code

