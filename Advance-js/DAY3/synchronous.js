console.log("----- Synchronous -----");
console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
console.log("F");

console.log("----- Asynchronous -----");
console.log("A");


setTimeout(() => {
  console.log("B - I AM LATE");
  
}, 2000); //(2 SEC)

//setTimeout(what,when);
//1000 -  1SEC
//2000 - 2SEC
//5000 - 5SEC


console.log("C");
console.log("D");
console.log("E");
console.log("F");
