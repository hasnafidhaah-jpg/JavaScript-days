async function getProducts() {
  try {
    console.log("Loading..."); // 1. Loading spinner

    // 2. Public API
    let res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Server Error " + res.status);
    }

    let products = await res.json();

    console.log("Success ");

    // 3. Render dynamically
    products.forEach(p => {
      console.log(p.title + " - $" + p.price);
    });

  } catch (err) {
    console.log("Error  Failed fetch: ", err.message); 
    // 4. Error handling
  } finally {
    console.log("Loading finished");
  }
}

getProducts();