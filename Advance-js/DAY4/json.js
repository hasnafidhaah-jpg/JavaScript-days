
async function getUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let text = await res.text();
    let data = JSON.parse(text);

    console.log(data[0].name);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

getUser();