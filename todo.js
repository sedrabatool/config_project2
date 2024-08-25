// const addbutton=document.getElementById("Addbutton")
// const rough=document.getElementById("rough")
// const alltasks=document.getElementById("alltasks")
// const tasknumber=document.getElementById("tasknumber")
// const donetasknumber=document.getElementById("donetask")
// const alldone=document.getElementById("alldone")
// editIndex=null


// //load data from local storage

// function loadfromlocalstorage(){
//     updatetasknumber()
//     const tasksarray= JSON.parse(localStorage.getItem("inputarray")) || [] //tasksarray is always a list
//     tasksarray.forEach(addtask)

// }

// //load done tasks from local storage


// function loaddonetasks(){
//     updatedonenumber()
//     const donetasksarray= JSON.parse(localStorage.getItem("donearray")) || [] 
//     donetasksarray.forEach(donetasks)
// }

// //add tasks

// function addtask(input,index){
//         const newDiv=document.createElement("div") //create new div
//         newDiv.classList.add('tasklist');   //give class name to div
//         newDiv.dataset.index = index; 
//         newDiv.innerHTML=`<div class="todolist">
//             <div><p style=" color: #9E78CF;">${input}</p></div>
//         </div>
        
//         <div class="iconlist">
//             <div><i class="fa-solid fa-check" style="color: #9E78CF;" onclick="checktask(${index})"></i></div>
//             <div><i class="fa-solid fa-pen" style="color: #9E78CF;"  onclick="edittask(${index})"></i></div>
//             <div><i class="fa-solid fa-trash" style="color: #9E78CF;" onclick="deleteTask(${index})"></i></div>
//         </div>`
//         alltasks.appendChild(newDiv)
//         updatetasknumber() //update number of tasks after adding each task
        
//     }

// //add done tasks 

// function donetasks(done){
//     const donediv=document.createElement("div")
//     donediv.classList.add('donelist');
//     if(done){
//         donediv.innerHTML=`<div><p style=" color: #78CFB0;"><s>${done}</p></div>`
//         alldone.appendChild(donediv)
//     }
//     updatedonenumber()  //update number of done tasks after adding each task to done list
   
// }
   
// //Delete a task

// function deleteTask(index){
//     //load from local storage
//     const tasksarray= JSON.parse(localStorage.getItem("inputarray")) || []
//     //delete task at provided index
//     tasksarray.splice(index,1) 
//     //again store the updated array to local storage
//     localStorage.setItem("inputarray", JSON.stringify(tasksarray));
//      //refresh all the tasks to add all tasks from local storage
//     alltasks.innerHTML = ""; 
//     loadfromlocalstorage()
//     updatetasknumber()
// }

// // check task

// function checktask(index){
//     //load from local storage
//     const tasksarray= JSON.parse(localStorage.getItem("inputarray")) || []
//     const appendtodonelist = tasksarray[index];
//     //delete task at provided index
//     tasksarray.splice(index,1) 
//     //again store the updated array to local storage
//     localStorage.setItem("inputarray", JSON.stringify(tasksarray));
//     alltasks.innerHTML=""  //refresh all the tasks to add all tasks from local storage
//     loadfromlocalstorage()
//     updatetasknumber()
//     const donetasksarray= JSON.parse(localStorage.getItem("donearray")) || []
//     donetasksarray.push(appendtodonelist)
//     localStorage.setItem("donearray", JSON.stringify(donetasksarray));
//     alldone.innerHTML=""
//     loaddonetasks()
//     updatedonenumber()
//     }

// //edit task

// function edittask(index){
//     const mytext=document.getElementById("mytext")
//     const tasksarray= JSON.parse(localStorage.getItem("inputarray")) || []
//     tasktoedit=tasksarray[index]
//     mytext.value=tasktoedit
//     editIndex=index
// }

// addbutton.onclick=function(){
//     if(editIndex!==null){
//         const mytext=document.getElementById("mytext")
//         updatedtext=mytext.value
//         if(updatedtext){
//             const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
//             tasksarray[editIndex]=updatedtext
//             localStorage.setItem("inputarray", JSON.stringify(tasksarray));
//             mytext.value = ""; // Clear input field
//             alltasks.innerHTML = ""; 
//             loadfromlocalstorage(); // Reload tasks
//             }
//         else{
//             alert("please write something")
//         }
//             editIndex=null
//         }
//     else{
//         const mytext=document.getElementById("mytext")
//         const enteredText=mytext.value.trim() // Get the input value and trim whitespace
//         const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || []; 
//         if(tasksarray.includes(enteredText)){
//             alert("duplications are not allowed") //to avoid duplications
//             mytext.value = ""; // Clear input field
//             }
//         else{
//             if (enteredText){
//                 tasksarray.push(enteredText);
//                 localStorage.setItem("inputarray", JSON.stringify(tasksarray));
//                 mytext.value = ""; // Clear input field
//                 alltasks.innerHTML = ""; 
//                 loadfromlocalstorage(); // Reload tasks
//                 }
//             else{
//                 alert("please enter something")
//                 }
//             updatetasknumber()
//             }
//           }
// }

// // updating tasks number

// function updatetasknumber() {
//     const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
//     const count = tasksarray.length;

//     // Clear previous messages

//     if (count === 0) {
//         alltasks.innerHTML = "";
//         const newDiv = document.createElement("div");
//         newDiv.classList.add('tasklist');
//         newDiv.innerHTML = `<div id="to-do1" class="todolist">
//             <div><p style="color:  #008080;">Wohoo! All tasks are completed!</p></div>
//         </div>`;
//         tasknumber.textContent = `Tasks to do - ${count}`;
//         alltasks.appendChild(newDiv);
//     } else {
//         tasknumber.textContent = `Tasks to do - ${count}`;
//     }
// }

// function updatedonenumber(){
//     const donetasksarray= JSON.parse(localStorage.getItem("donearray")) || [] 
//     const count = donetasksarray.length;
//     if (count === 0) {
//         donetasknumber.textContent = `Done`;
//     } else {
//         donetasknumber.textContent = `Done - ${count}`;

//     }

// }

// function onLoad() {
//     loadfromlocalstorage();
//     loaddonetasks();
// }

// window.onload = onLoad;

const addbutton = document.getElementById("Addbutton");
const rough = document.getElementById("rough");
const alltasks = document.getElementById("alltasks");
const tasknumber = document.getElementById("tasknumber");
const donetasknumber = document.getElementById("donetask");
const alldone = document.getElementById("alldone");
editIndex = null;

// Load data from local storage
function loadfromlocalstorage() {
    updatetasknumber();
    const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || []; // tasksarray is always a list
    tasksarray.forEach(addtask);
}

// Load done tasks from local storage
function loaddonetasks() {
    updatedonenumber();
    const donetasksarray = JSON.parse(localStorage.getItem("donearray")) || [];
    donetasksarray.forEach(donetasks);
}

// Add tasks
function addtask(input, index) {
    const newDiv = document.createElement("div"); // Create new div
    newDiv.classList.add('tasklist'); // Give class name to div
    newDiv.dataset.index = index;
    newDiv.innerHTML = `<div class="todolist">
            <div><p style=" color: #9E78CF;">${input}</p></div>
        </div>
        
        <div class="iconlist">
            <div><i class="fa-solid fa-check" style="color: #9E78CF;" onclick="checktask(${index})"></i></div>
            <div><i class="fa-solid fa-pen" style="color: #9E78CF;" onclick="edittask(${index})"></i></div>
            <div><i class="fa-solid fa-trash" style="color: #9E78CF;" onclick="deleteTask(${index})"></i></div>
        </div>`;
    alltasks.appendChild(newDiv);
    updatetasknumber(); // Update number of tasks after adding each task
}

// Add done tasks
function donetasks(done) {
    const donediv = document.createElement("div");
    donediv.classList.add('donelist');
    if (done) {
        donediv.innerHTML = `<div><p style=" color: #78CFB0;"><s>${done}</p></div>`;
        alldone.appendChild(donediv);
    }
    updatedonenumber(); // Update number of done tasks after adding each task to done list
}

// Delete a task
function deleteTask(index) {
    const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
    tasksarray.splice(index, 1); // Delete task at provided index
    localStorage.setItem("inputarray", JSON.stringify(tasksarray)); // Store updated array to local storage
    alltasks.innerHTML = ""; // Refresh all the tasks to add all tasks from local storage
    loadfromlocalstorage();
    updatetasknumber();
}

// Check task
function checktask(index) {
    const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
    const appendtodonelist = tasksarray[index];
    tasksarray.splice(index, 1); // Delete task at provided index
    localStorage.setItem("inputarray", JSON.stringify(tasksarray)); // Store updated array to local storage
    alltasks.innerHTML = ""; // Refresh all the tasks to add all tasks from local storage
    loadfromlocalstorage();
    updatetasknumber();
    const donetasksarray = JSON.parse(localStorage.getItem("donearray")) || [];
    donetasksarray.push(appendtodonelist);
    localStorage.setItem("donearray", JSON.stringify(donetasksarray));
    alldone.innerHTML = "";
    loaddonetasks();
    updatedonenumber();
}

// Edit task
function edittask(index) {
    const mytext = document.getElementById("mytext");
    const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
    tasktoedit = tasksarray[index];
    mytext.value = tasktoedit;
    editIndex = index;
}

// Add task or update existing task
addbutton.onclick = function () {
    const mytext = document.getElementById("mytext");
    const enteredText = mytext.value.trim();

    if (editIndex !== null) {
        // Update existing task
        if (enteredText) {
            const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
            tasksarray[editIndex] = enteredText;
            localStorage.setItem("inputarray", JSON.stringify(tasksarray));
            mytext.value = ""; // Clear input field
            alltasks.innerHTML = "";
            loadfromlocalstorage(); // Reload tasks
        } else {
            alert("Please write something");
        }
        editIndex = null;
    } else {
        // Add new task
        const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
        if (tasksarray.includes(enteredText)) {
            alert("Duplications are not allowed"); // Avoid duplications
            mytext.value = ""; // Clear input field
        } else {
            if (enteredText) {
                tasksarray.push(enteredText);
                localStorage.setItem("inputarray", JSON.stringify(tasksarray));
                mytext.value = ""; // Clear input field
                alltasks.innerHTML = "";
                loadfromlocalstorage(); // Reload tasks
            } else {
                alert("Please enter something");
            }
            updatetasknumber();
        }
    }
}

// Updating tasks number
function updatetasknumber() {
    const tasksarray = JSON.parse(localStorage.getItem("inputarray")) || [];
    const count = tasksarray ? tasksarray.length : 0;

    if (count === 0) {
        alltasks.innerHTML = "";
        const newDiv = document.createElement("div");
        newDiv.classList.add('tasklist');
        newDiv.innerHTML = `<div id="to-do1" class="todolist">
            <div><p style="color:  #008080;">Wohoo! All tasks are completed!</p></div>
        </div>`;
        tasknumber.textContent = `Tasks to do - ${count}`;
        alltasks.appendChild(newDiv);
    } else {
        tasknumber.textContent = `Tasks to do - ${count}`;
    }
}

function updatedonenumber() {
    const donetasksarray = JSON.parse(localStorage.getItem("donearray")) || [];
    const count = donetasksarray ? donetasksarray.length : 0;
    if (count === 0) {
        donetasknumber.textContent = `Done`;
    } else {
        donetasknumber.textContent = `Done - ${count}`;
    }
}

function onLoad() {
    loadfromlocalstorage();
    loaddonetasks();
}

window.onload = onLoad;





