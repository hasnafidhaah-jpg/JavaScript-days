
//reject vilicha -> .catch work avum


//1. .then()

//resolve vilicha -> .then work avum
 
// let p = new Promise((resolve, reject) =>{
//   resolve("food ready");
  
// });
// p.then((result) => {
//   console.log(result);
  
// });


// //2. .catch()

// let p2 = new Promise((resolve, reject)=>{
// reject("no food");
// });
// p2.catch((error)=>{
//   console.log(error);
// });


let p = new Promise((resolve, reject)=>{
  let success = true;
  if(success) resolve("OK");
  else reject("FAIL");
});

p.then((res)=>{
  console.log("Then: "+res);
}).catch((err)=>{
  console.log("Catch: "+err);
  
});