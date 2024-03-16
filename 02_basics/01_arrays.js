const arrays= [0, 1, 2, 3, 4, 5];

// arrays.push(6);
// arrays.push(7)
// arrays.pop()

arrays.shift()  // removes first element from array
// console.log(arrays);


const newarray = arrays.join()       /** isme elemnet to same hi aate h lekin type change ho gya h new array ka string me convert ho jta h  **********/
// console.log(arrays);
// console.log(newarray);      


/***** slice and spilce *****/

console.log('A' , arrays);

const myn1 = arrays.slice(1, 3);
console.log('B', myn1);

const myn2 = arrays.splice(1, 3);
console.log('C', myn2);