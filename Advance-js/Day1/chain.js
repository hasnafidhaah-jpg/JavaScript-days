//OPTIONAL CHAINING

const student ={
  name: "Hasna"
}
// console.log(student.address);  !!ERROR

console.log(student.address?.place); //undifined
console.log(student.address?.place?.city);

//3.USE CASE

//1.OBJECT
// user?.address?.city

//2.ARRAY
//students?.[0]?.name 
// students array undegil first student nte name edukkum


//3.FUNCTION
//showData?.() 
// showData function undegil mathram call aakum