//Default Function Parameters

 function add(a=10, b=20){
  console.log(a+b);
 }
// add(100, 200);
// add();
// add(100);

function signIn(user="Guest"){
  console.log("Welcome "+user);
}
signIn();
signIn("Hasna");