// for
const functions = ()=>{
    for (let i = 0; i < 10; i++){
        const element = () =>{
            console.log("Hello Rahul");
        }
        console.log(element());
    } 
}
functions();
let n = 10 
for(let i = 0; i<n;i++){
    console.log("Radhe");
    for(let j = 0; j<n;j++){
        console.log("Radhe Krishna")
    }
}

// rinting the table 
for(let i = 1; i<=10;i++){
    console.log(`Printing the table ${i}`)
    for(let j = 1; j<=10; j++){

        console.log(`${i} * ${j} = ${i*j}`);
    }
}
let myArray = ["flash","ShaktiMan","SuperMan","BatMan"]
let m= myArray.length;
for(let i = 0; i<m;i++ ){
    const element = myArray[i];
    console.log(element);
}

// Keywords 
// break -> continue 
// break -> teriminate the loop
// continue -> skiping the iteration okay .........