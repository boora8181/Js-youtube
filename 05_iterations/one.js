// for loop

array=[11,13,17,19];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element)
};



for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop is ${i}`);
     for (let j = 1; j <= 10; j++) {
        // console.log(i+`*`+ j+ `=`  + i*j);
         
     }
    
}


/// Break and continue


for (let index = 1; index <= 7; index++) {
    if (index ==5 ) {
        console.log(`5 is detected`);
        continue
    }
   console.log(`value of i is ${index}`);
   
}