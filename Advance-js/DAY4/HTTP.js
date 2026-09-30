let url = "https://jsonplaceholder.typicode.com/posts/1";

//1.GET - Data edukkan
async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  console.log("GET:",data);
}

//2.POST - puthiyath undakkan
async function postData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method:"POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({ title: "My Post", body: "Hello"})
  });
  let data = await res.json();
  console.log("POST:", data);
  
}

//3.PUT-full update 
async function putData() {
  let res = await fetch(url,{
  method:"PUT",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({ title: "Full Update"})
  });
  let data = await res.json();
  console.log("PUT:", data);
}

//4.PATCH - oru bhagam update 
async function patchData() {
  let res = await fetch(url,{
  method:"PATCH",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({ title: "ONLY NAME CHANGE"})
  });
  let data = await res.json();
  console.log("PATCH:", data);
}

//5.DELETE - delete
async function deleteData() {
  let res = await fetch(url,{
  method:"DELETE"
  });
  console.log("DELETE:", res.status, " - Deleted");
}

getData();
// postData();
// putData();
// patchData();
// deleteData();