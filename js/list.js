
// Targeting html elements
const inputContainer = document.querySelector(".container-list")
const taskValue = document.querySelector("#task")
const tableList = document.querySelector(".task-table")
let divList = document.createElement("div")


//Adding new task to the To Do list
const addButton = document.querySelector("#addTask")
addButton.addEventListener('click', createTask)

let clearButton = document.querySelector("#clearTask")
clearButton.style.display = "none"
clearButton.addEventListener('click', clearTask)


//object constructor to taskValue
function storeTaskValue(task){
  this.task = task
}
  

//Creating a new task
function createTask(){
 const newTask = new storeTaskValue( taskValue.value)
 if (taskValue.value.length ===  0){
  alert("Enter a task")
 }
//  else if (taskValue.value.length ===  30  ||taskValue.value.length > 30){
//   divList.style.fontsize = "12px"
//   divList.style.marginLeft = "6rem"
//   alert("Limited number of letters is 30 ! Enter next task")
//   tableList.style.display = "none"
//  }
 else{
  taskValue.value = ""
  loopArray(newTask.task) 
   }
  

}
  
 


//Displaying the Value of the task enter
function loopArray(task){
 let parentDiv = document.createElement("div")
 let checkbox = document.createElement("input")
 let divList = document.createElement("div")
 let line = document.createElement("hr")
 let lineDiv = document.createElement("div")


//  let completeTask = document.querySelector("#check").addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'div') {
//     ev.target.classList.toggle('completeList');
//   }
// }, true);  


 checkbox.type = "checkbox"
 checkbox.id = "check"
 
 parentDiv.classList = "taskTable";
 divList.classList = "completeList";
 divList.innerHTML  = task
 parentDiv.style.display = 'flex';
 parentDiv.style.padding = '0.5rem 0.5rem';
 lineDiv.style.width = '100%';
 
 line.style.marginLeft = '-1rem';
 



 parentDiv.appendChild(checkbox)
 parentDiv.appendChild(divList)
 divList.append(lineDiv)
 lineDiv.appendChild(line)

 tableList.appendChild(parentDiv)

 clearButton.style.display = "block"
 

}


function clearTask(){
  tableList.style.display = "none";
  clearButton.style.display = "none"
}



