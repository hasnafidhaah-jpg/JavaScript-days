const students = [
  { name: "Hasna", mark: 80 },
  { name: "Aisha", mark: 45 },
  { name: "Fathima", mark: 90 },
  { name: "Zara", mark: 65 }
];

//1.MARK LOW TO HIGH

const lowToHight = [...students].sort((a,b) =>{
  return a.mark - b.mark;
});
console.log(lowToHight);

const hightToLow = [...students].sort((a,b) =>{
  return b.mark - a.mark;
});
console.log(hightToLow); 

//original
console.log("Original: ", students);

