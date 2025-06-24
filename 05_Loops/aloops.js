const coding = ["js","ruby", "java","cpp","python"];
// coding.forEach((item) =>{
//     console.log(item);
// })

const values = coding.forEach((item) =>{
    return item;
})
console.log(values);

const myNums = [1,2,3,4,5,6, 7];
// return keyword is important for returning any value

// const newNums = myNums.filter((num) =>{
//     return num > 4;
// })
// console.log(newNums);

const NewName = []
myNums.forEach((num) =>{
    if(num > 4){
        NewName.push(num);
    }
})
console.log(NewName);