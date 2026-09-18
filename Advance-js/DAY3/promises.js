let promise = new Promise((resolve, reject) =>{
  resolve("kitti");
});

promise
.then((data)=>{
  console.log("Success: "+data);
  
})
.catch((err)=>{
  console.log("Error: "+err);
  
});

//resolve vilicha -> .then work avum
//reject vilicha -> .catch work avum

let promise2 = new Promise((resolve, reject) =>{
  reject("kittiyilla");
});

promise2
.then((data)=>{
  console.log("Success: "+data);
  
})
.catch((err)=>{
  console.log("Error: "+err);
  
});

