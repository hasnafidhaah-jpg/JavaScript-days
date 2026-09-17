let myNumbers = [2, 34, 56, 91, 23, 55];

// let sum = 0;
// myNumbers.forEach((num) => (sum += num));
// console.log(sum);

//REDUCE

const shoppingCart =[
  {name:"T-shirt", price: 15.99},
  {name:"Jeans", price: 39.99},
  {name:"Sneakers", price: 79.99},
  {name:"Hat", price: 12.5}
]
const result = shoppingCart.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator} and CurrValue: ${currentValue.name}`);
  return accumulator+currentValue.price;
}, 0);
console.log(result);