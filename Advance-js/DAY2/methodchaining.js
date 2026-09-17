const students = [
  { name: "Hasna", mark: 80 },
  { name: "Aisha", mark: 45 },
  { name: "Fathima", mark: 90 },
  { name: "Zara", mark: 65 }
];

//NOT USE CHAIN
// let step1 = students.filter(s => s.mark >= 50);
// let step2 = step1.map(s => s.name);
// let step3 = [...step2].sort();

//use method chaining

const result = students
.filter(s => s.mark >= 50)
.map(s => s.name)
.sort()

console.log(result);

const total = students
.filter(s => s.mark >= 50)
.reduce((sum, s) => sum + s.mark, 0);

console.log(total);

