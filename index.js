
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
console.log("document:", document);

// # Functionality For A Adding Tasks...
function addTask() {
    // #Alert() For An Empty InputBox value... 
  if (inputBox.value === "") {
    alert("you Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
//   #Clear The InputBox After Adding...
  inputBox.value = "";
//   # Save The tasks After Adding...
    saveTasks();
}

listContainer.addEventListener("click", function(event){
    // #Toggle The Task As Checked/UnChecked...
    if ((event.target.tagName === "LI")) {
      event.target.classList.toggle("checked");
        saveTasks();
      
    } 
    // # Delete The Task... 
    else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveTasks();
    }
  }, false);

  // #Fucntion For Saving Tasks In localStorage... 
  function saveTasks() {
    localStorage.setItem('Tasks', listContainer.innerHTML)

  }
  
//   #Fucntion For Showing Tasks From localStorage... 

  function showSavedTasks() {
    listContainer.innerHTML = localStorage.getItem('Tasks');
  }
showSavedTasks();
