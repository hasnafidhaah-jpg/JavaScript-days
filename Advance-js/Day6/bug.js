import { getData } from './One/combine.js'

let state = { isLoading: true, isError: false, data: [], isEmpty: false }

async function run() {
  console.log("1. START - isLoading:", state.isLoading);
  try {
    const data = await getData()
    console.log("2. DATA RECEIVED:", data.length);

    state.isLoading = false;
    state.data = data;
    state.isEmpty = data.length === 0;

    console.log("3. FINAL STATE:", state);
    console.log("Data:", data.map(u => u.name));

  } catch (err) {
    state.isLoading = false;
    state.isError = true;
    console.error("FAILED AT:", err.message)
    console.error(err.stack)
  }
}

run()