async function getUser() {
  try {
    console.log("Loading...");

    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    
    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    }

    let data = await res.json();
    console.log("Success:", data[0].name);

  } catch (err) {
    console.log(" Error kitti:", err.message);
  } finally {
    console.log("Loading off");
  }
}

getUser();