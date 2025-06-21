 const name = "rahul";
 const goal = 23;
 console.log(name + goal + "Value");
 console.log(`Hello my name is ${name} and my repo count is ${goal}`);

//  const goodName = new String("rahul");

//  Accessing the value with index par
// const goodName = new String("Rahul Poddar");
// // index of the String
// console.log(goodName[0]);
// // console.log(goodName._proto_);
// // length of string 
// console.log(goodName.length);
// console.log(goodName.toUpperCase());
// console.log(goodName.charAt(2));
// console.log(goodName.indexOf('h'));


const goodName = new String("Rahul Poddar");
const newString = goodName.substring(0,4);
console.log(newString);

const anotherSting = goodName.slice(-1,4);
console.log(anotherSting);
const newstringONe = "     Rahul      ";
console.log(newstringONe);
console.log(newstringONe.trim());

const url = "https://rahuul.com/hithsh24/rahulpoddar"
console.log(url.replace('24','58'));
console.log(url);
console.log(url.includes('rahul'));

// string to array convert
console.log(url.includes('sundar'));
console.log(goodName.split('-'));
