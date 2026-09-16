//SPREAD OPERATOR IN ARRAY

// let ar1=[10, 20, 30];

// let ar2=[40, 50, 60];

// let ar3=ar1.concat(ar2);
// ar3.push(70);

// console.log(ar3);

// console.log(ar1);
// console.log(...ar1);

//Array Copy

// let ar3=[...ar1];
// console.log(ar3);
// ar1 nte copy ar3 il labhikkum


// let ar3=[...ar1, ...ar2];
// console.log(ar3);

// let ar3=[...ar1, ...ar2, 70];
// console.log(ar3);

// let ar3=[...ar1, ...ar2, 70, 80, 90];
// console.log(ar3);

// let ar3=[100, ...ar1, ...ar2, 70, 80, 90];
// console.log(ar3);


2.//OBJECT IN SPREAD OPERATOR

let obj1 = {
  country: "India",
  capita: "New Delhi"
}

let obj2 ={
  language: "Hindi"
}

let obj3 ={
  pops: 20000
}

let obj4 ={...obj1, ...obj2, ...obj3}
console.log(obj4);
