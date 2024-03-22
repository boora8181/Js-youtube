// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = numbers.map( (Num) => Num + 10 )

// console.log(newnum);

//  Chaining
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnum = numbers.map ( (num) => num * 10).map( (num) => num +1).filter( (num) => num > 40)

console.log(newnum);
