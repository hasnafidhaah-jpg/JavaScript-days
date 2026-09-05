function avgArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(avg);
}
avgArray([20, 40, 50, 90, 10]);