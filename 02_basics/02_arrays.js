const marvelheroes = ['thor', 'spiderman', 'ironman'];

const dcheroes = [ 'superman', 'flash', 'batman'];

// marvelheroes.push(dcheroes)

// console.log(marvelheroes);

const newheroes = marvelheroes.concat(dcheroes)

// console.log(newheroes);

/********   spread operator  ****/

const allheroes = [...dcheroes, ...marvelheroes];
// console.log(allheroes);

/******** same result aaya h concat or spread operator ka  ******/



/*****   array k andr bhot saare array  */

const arrayinarray = [1, 2 ,3,  [4, 5, 2], 6, [7, 1, [ 8, 5]]];

const simplearray = arrayinarray.flat(Infinity)
// console.log(simplearray);


console.log(Array.isArray("Aman"))
console.log(Array.from("Aman"));

