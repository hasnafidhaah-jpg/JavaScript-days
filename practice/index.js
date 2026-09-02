let registerButton = document.getElementById("register");

registerButton.onclick = function() {
  console.log("Register button clicked");
}
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("register").innerHTML = "Hello World";
}