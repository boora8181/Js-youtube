function saymyname() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("B");
    console.log("O");
    console.log("O");
    console.log("R");
    console.log("A");
     
}

// saymyname()

// function addtwonumber(number1, number2){
//     console.log(number1 + number2);
// }



function addtwonumber(number1, number2){
    let result = number1 + number2
    return result
}
const result = addtwonumber(122, 148)
// console.log("result : ", result);

function userloggedin(username) {
return ` ${username} just logged in `
}
console.log(userloggedin("Aman"));

function Calculatecartprice(...num1) {
return num1
}
console.log(Calculatecartprice(10, 20, 20, 50, 100, 1000));