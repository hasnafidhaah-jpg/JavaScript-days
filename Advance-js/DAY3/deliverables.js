//Simulate delayed user login

function loginUser(username, password){
  return new  Promise((resolve, reject)=>{
    console.log("Login check.....");

    setTimeout(()=>{
      if (username === "hasna" && password === "123"){
        resolve("Login Success! Welcome Hasna");
      }else{
        reject("Login Failed! Wrong Password");
      }
    },2000);
    
  });
}

//Handle success and failure flows
console.log("-----PROMISE CHAIN-----");
loginUser("hasna", "123")
.then((successMsg)=>{
  console.log(successMsg);
  return "User data loading....";
})
.then((nextMsg)=>{
  console.log(nextMsg);
  
})
.catch((errorMsg)=>{
  console.log(errorMsg);
  
});

//Convert promise chain into async/await
async function handleLogin() {
  console.log("/n--- ASYNC/AWAIT ---");
  try{
    let result = await loginUser("hasna", "123");
    console.log(result);
    
  }catch(error){
    console.log(error);
    
  }
}
handleLogin();