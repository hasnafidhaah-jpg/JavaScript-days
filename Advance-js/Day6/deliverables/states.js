import {getData} from "./api.js";

let state = {
   isLoading: true,
   isError: false,
   data: [],
  search: "batman"
}

async function run() {
  try {
    state.isLoading = true;
    console.log("Loading....");

    const data = await getData(state.search);

    state.isLoading = false;
    state.data = data;
    console.log("Data:", data);

    const filtered = data.filter(m => parseInt(m.Year) > 2015);
    console.log("Filtered (year > 2015):", filtered);

  } catch (error) {
    state.isLoading = false;
    state.isError = true;
    console.error("Error state:", error.message);
  }
}

//search function
function searchMovie(newSearch) {
  state.search = newSearch;
  run(); // re-run the function with the new search term
}

run(); // initial run with default search term