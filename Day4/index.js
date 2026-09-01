let student = {
  name: "John",
  courses: "Mern Stack",
  place: "Ottappalam"
};

document.getElementById("name").innerText = student.name;
document.getElementById("course").innerText = student.courses;

function changeColor(){
  document.getElementById("name").style.color = "purple";
  document.getElementById("name").style.fontSize = "40px";
}