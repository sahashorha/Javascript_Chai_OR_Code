const myObject = {
    js : 'JavaScript',
    cpp :'c++',
    rb :'ruby',
    swift :'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

 const programming = ["js","rb","py","java","cpp"]
 for (const key in programming) {
    console.log(programming[key]);
 }

//  map => dont used for in loop 
