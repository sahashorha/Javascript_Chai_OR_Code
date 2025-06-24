// for of 
// [
//     "",
//     "",
//     ""
// ]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const greatings = "Hello World";
for (const val of greatings) {
    console.log(`Each car ${val}`);
}

// Maps
const map = new Map();
map.set('IN','India');
map.set('USA',"United States of America");
map.set('Fr',"France");
console.log(map);

for (const [key, value] of map) {
    console.log(key,' :- ' , value);
}

//   

// for of loop -> is Used in Array  
// for of loop is not used in Array objects 




