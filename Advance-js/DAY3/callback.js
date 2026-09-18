//1.NORMAL FUNCTION 

function hello(){
  console.log("hello done");
  
}

//2.CALLLBACK FN
function greet(name, callback){
  console.log("Hi " + name);
  callback();
}

//WHEN CALL
greet("Hasna", hello);


//hello() = callback


//ASYNC CALLBACK
function getData(callback){
  console.log("Collecting  data");
 
  
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

getData((result) => {
  console.log(result);
  
});

console.log("I am not wait");
