let a = 300        // global scope 

if (true) {                     // block scope
    let a=30                    
    const b= 20
    console.log("Inner;",a );
    
}
console.log(a);

/***  Nested scope ******/

function one() {
    const username = "Aman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    // ye console print nhi karega kunki hum 2nd function se bahr aa gaye 

    two()            // but yha pe ye print karega kunki 2nd function ke liye 1st function hi global scope h 

}
one()
