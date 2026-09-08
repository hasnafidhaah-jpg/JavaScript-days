


function message(){
  var c1 = "HTML"; //Function scoped
let c2 = "CSS"; //Block scoped
const c3 = "JavaScript";  //Block scoped
if(true){


console.log(c1);
console.log(c2);
console.log(c3);
}

  console.log(c1);
  console.log(c2);
  console.log(c3);
}
message();

