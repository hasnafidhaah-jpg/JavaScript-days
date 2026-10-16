

import { getData } from './One/combine.js'
let state = {
  isLoading: true,   // 1. Loading state
  isError: false,    // 2. Error state
  data: [],          // 3. Data state
  isEmpty: false     // 4. Empty state
}

async function run() {
  try {
    console.log("Loading...")  
    state.isLoading = true

    const data = await getData() // API

    state.isLoading = false
    state.data = data

    if(data.length === 0){
      state.isEmpty = true
      console.log("No data found") // UI: Empty message
      return
    }

    // Data kittiyal
    const names = data.map(u => u.name)
    console.log("Data:", names) // UI: List 

  } catch (err) {
    state.isError = true
    console.log(" Error:", err.message) // UI: Error message
  }
}
run()