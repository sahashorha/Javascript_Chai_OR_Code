// const coding = ["js","ruby", "java","cpp","python"];
// coding.forEach((item) =>{
//     console.log(item);
// })

// const values = coding.forEach((item) =>{
//     return item;
// })
// console.log(values);

// const myNums = [1,2,3,4,5,6, 7];
// return keyword is important for returning any value

// const newNums = myNums.filter((num) =>{
//     return num > 4;
// })
// console.log(newNums);

// const NewName = []
// myNums.forEach((num) =>{
//     if(num > 4){
//         NewName.push(num);
//     }
// })

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const userBooks = books.filter((bk)=>{
   return bk.genre ==='History'
  })
console.log(userBooks);
 const NewBooks = books.filter((bk) =>{
    return bk.publish >= 2000
 }) 
//  when scope put use return keyword
 console.log(userBooks);