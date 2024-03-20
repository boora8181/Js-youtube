//  for of

const array = [1, 2, 3, 4, 5]
for (const num of array) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of  greetings) {
    if (greet == ' ') {
        // console.log(`space is detected`);
        continue
    }
    // console.log(`Each charac is ${greet}`);

}


//  Maps   

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United states of america')
map.set('Fr', 'France')
map.set('CN', 'Canada')

// console.log(map);

/********* using forof loop instead of maps **************/

for (const [key, value] of map) {
    console.log(key ,`;`, value);
    
}
