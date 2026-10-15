// //1. Date Helpers

export const formatDate = (date) => {
  return date.toLocaleDateString('en-IN')
}
export const getTime = () => {
  return new Date().toLocaleTimeString()
}

console.log(getTime());
console.log(formatDate(new Date()));

//2.String helpers


export const capitalize = (str) => {
  return str.charAt(0).toUpperCase()+str.slice(1)
}
export const shortText = (text, limit) => {
  return text.slice(0, limit) + "..."
}

console.log(capitalize("hasna"));
console.log(shortText("I am Aspiring AI Engineer",10));

