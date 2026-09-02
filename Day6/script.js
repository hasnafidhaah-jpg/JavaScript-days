let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = -1;

function show(){
  document.getElementById("list").innerHTML = "";
  notes.forEach((note, index) => {
    document.getElementById("list").innerHTML +=
     `<li>${note} 
      <button onclick="editNote(${index})">Edit</button>
      <button onclick="del(${index})">Delete</button></li>`;
  });
}

function save(){
  localStorage.setItem("notes", JSON.stringify(notes));
}

function add(){
  let val = document.getElementById("input").value.trim();
  if(val === ""){
    alert("Please enter a note.");
    return;
  }

  if(editIndex === -1){
    notes.push(val);
  } else {
    notes[editIndex] = val;
    editIndex = -1;
  }

  save();
  show();
  document.getElementById("input").value = "";

}

function del(index){
  notes.splice(index, 1);
  save();
  show();
}

function editNote(index){
  document.getElementById("input").value = notes[index];
  editIndex = index;
}

show();