//REST PARAMETERS

// function sum(num1, num2, num3){
//   console.log(num1+num2+num3);
// }
// sum(100, 20, 90);

//using restparameter
function sum(num1, num2, ...nums){
  let sum=0;
  for(let x of nums){
    sum+=x;//sum= sum+x;
  }
  console.log(num1+num2+sum);
}
sum(10,20,30,40,50);