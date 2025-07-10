const input_task = document.getElementById("taskInput");
const task_list = document.getElementById("task-list");
const btn = document.querySelector(".btn");

// add new task to the list
function addTask() 
{
    let task_value = input_task.value;
    if (!task_value)
    {
        alert("Please enter a task  :-(");
        return;
    }
    else
    {
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = task_value;
        task_list.appendChild(li);
        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    // clear the input field after adding the task
    input_task.value = "";
    saveTasks();
}

// add task when claiked add to button
btn.addEventListener("click", addTask);

task_list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks();
    }
    // console.log(e.target.tagName);
} );

// add task when enter key is pressed
input_task.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
    // console.log(e.key);
});

// save list data to local storage
function saveTasks() {
    localStorage.setItem("lists", task_list.innerHTML);
}

// load list data from local storage
function loadTasks() {
    task_list.innerHTML = localStorage.getItem("lists");
}

loadTasks();