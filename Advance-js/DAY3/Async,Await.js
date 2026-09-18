function getData(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("HASNA!");
    }, 2000);
  });
}

//2.Next use await

async function getMyData() {
  try{
    let data = await getData();
    console.log(data);
    
  }catch(err){
    console.log(err);
    
  }
}
getMyData();