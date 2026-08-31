let nums = [12, 45, 7, 99, 23];
let largest = nums[0];
for(let i = 0; i<nums.length; i++){
  if(nums[i] > largest){
    largest = nums[i];
  }
}
console.log(largest);
