/******    immediately invoked function expression (IIFE) /**********  kisi function ko immediately run karvane ke liye iife ka use karte h taki global scope ke pollution se bache mtlb agr global space me bi vhi chiz run ho rhi h to use prevent karna h  **********/


(function Chai() {
        console.log(`DB connected`)

}) ();

( (name) => {
    console.log(` DB connected two ${name}`)

}) ('Aman');

