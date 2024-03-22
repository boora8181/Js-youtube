// const mynum = [ 1,2 ,3, 4, 5]

// const Total = mynum.reduce(function(acc , currval) {
//     console.log(`accumulator is ${acc}, currentvalue is ${currval}`);
//     return acc + currval

// }, 0);

// // console.log(Total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay =shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(pricetopay);