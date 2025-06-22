const tinderUser = new Object(); //-> singleton objects 

console.log(tinderUser);
tinderUser.id ="34sdf";
tinderUser.name = "rahult" 
tinderUser.isLoggedIn = false;
console.log(tinderUser);;


const regularUser= {
    email : "sonemone@gmail.com",
    fullname :{
        userFullName :{
            firstname : "rahul",
            lastname : "Poddar"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname);
// objects inside object is accessed thorough . nesting 