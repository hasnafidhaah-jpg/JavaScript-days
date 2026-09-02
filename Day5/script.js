let form = document.querySelector("#todoForm");
let input = document.querySelector("#taskInput");
let list = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
showTasks();

form.addEventListener("submit",  (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    alert("Please enter a task.");
    return;
}
tasks.push(input.value);
localStorage.setItem("tasks", JSON.stringify(tasks));
input.value = "";
showTasks();
});

function showTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">Delete</button></li>`;
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}