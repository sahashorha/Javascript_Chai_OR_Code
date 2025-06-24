const coding = ["js","ruby","java","python","cpp","c"];
coding.forEach(function (val){
    console.log(val);
})

// for each loop jo objects pe lag ja rha hai but map pe nhi lag
// rha hai 

// for each loop is work in this manner

console.log(`let`);

coding.forEach((item) =>{
    console.log(item);
})

function printMe (item){
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item,index. arr);
})

// Array of Objects 
const myCOding = [
    { 
        languageName : "JavaScript",
        langguageFileName : "js"
    },
    {
        languageName : "Ruby",
        langguageFileName : "js"
    },
    {
        languageName : "Rails",
        langguageFileName : "js"
    },
    {
        languageName : "Python",
        langguageFileName : "js"
    },
    {
        languageName : "Node js",
        langguageFileName : "js"
    }
]
myCOding.forEach((item) => {
    console.log(`languageName : ${item.languageName} and 
        languageFileName ${item.langguageFileName}`);
})