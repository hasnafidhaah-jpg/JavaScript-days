//simple-fetch - GET
async function getUsers() {
  try{
    console.log("Loding...");
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  }catch(err){
    console.log("Error: "+ err);
    
  }
}
getUsers();

//imp
//. await fetch(url)-> request ayakkum
//. await response.json() -> kittiya data readable aakkum 
//simple-fetch - POST
async function createUser() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users",{
  method: "POST",
  headers: { "Content-Type": "application/json"},
  body: JSON.stringify({
     name: "Hasna",
    age: 18})
  });
  let data = await res.json();
  console.log(data);
  
}
createUser();


// NOTES

//fetch(url)=GET -> data edukkan
//fetch(url, {method:"POST", body:....})=data ayakkan
//res.json()= JSON parse cheyyal
//JSON.stringify()= js object -> JSON string