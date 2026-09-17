const students = [
  { name: "Hasna", mark: 80 },
  { name: "Aisha", mark: 45 },
  { name: "Fathima", mark: 90 },
  { name: "Zara", mark: 65 }
];

const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 }
];

const products = [
  { name: "Coffee", price: 120 },
  { name: "Tea", price: 40 },
  { name: "Cake", price: 200 }
];

// 1. Filter passed students list (mark >= 50)
const passedStudents = students.filter(s => s.mark >= 50);
console.log("1. Passed Students:", passedStudents);

// 2. Calculate cart total using reduce
const cartTotal = cart.reduce((total, item) => total + item.price, 0);
console.log("2. Cart Total:", cartTotal);


// 3. Sort products by price (low to high)
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log("3. Sorted by Price:", sortedProducts);

// 4. Chain methods for dashboard stats
const dashboardStats = students
  .filter(s => s.mark >= 50)
  .sort((a, b) => b.mark - a.mark)
  .map(s => s.name);
  console.log("4. Dashboard Stats (Toppers):", dashboardStats);

  // Dashboard total passed marks
const totalPassedMarks = students
  .filter(s => s.mark >= 50)
  .reduce((sum, s) => sum + s.mark, 0);

console.log("5. Total Passed Marks:", totalPassedMarks);