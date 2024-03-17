

const Jsuser= {
   name: "Aman", 
   age : 19, 
    email : "1234@.com", 
    location  : "Haryana",
    isloggedin : "false",
}
// console.log(Jsuser);
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);

Jsuser.email = "aman@123.com"
Object.freeze(Jsuser)   // freeze property use karne ke baad object me changes show nhi hote kaise hamne jsuser ko freeze karke usk email change kari lekin email me koi change nhi aaya
Jsuser.email = "boora@1234.com"
// console.log(Jsuser.email);


const course = {
    coursename : ' Js in hindi', 
    price : '999', 
    Instructor : 'Hitesh'
     
}

console.log(course.price);
