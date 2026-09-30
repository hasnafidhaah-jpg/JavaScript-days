async function getUser() {
  try {
    console.log("1. Loading..."); // Loading state

    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Server error");
    }

    let data = await res.json();

    console.log("2. Success! Data kitti:", data[0].name);

  } catch (err) {
    console.log("3. Error: ", err.message); // Error state
  }
}

getUser();