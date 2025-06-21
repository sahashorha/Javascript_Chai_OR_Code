// Today learning 
// concatination of array using marvel and dc
// concat -> give me the one to two array in the single array
// methods of joining the array -> [...array1,..array2]
// from -> gives the string into the array
//  Many types of variable -> gives me single 
//  array -> console.log(score1, score2,score3);
// gives me the variable -> array 
 
 
 
 
 
 
 const marvel_heroes = ["thor", "Ironman","spiderman"]
 const dc = ["superman","flash","batman"]
//  marvel_heroes.push(dc);
//  console.log(marvel_heroes);
 
//  const allHeroes = marvel_heroes.concat(dc);
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes,...dc];
// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],3,[3,4,5,6]]
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Hithesh"));
console.log(Array.from("Rahul"));
console.log(Array.from({name :"Hithesh"}))
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score1,score3));


