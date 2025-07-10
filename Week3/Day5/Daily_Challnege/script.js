const input_task = document.getElementById("taskInput");
const task_list = document.getElementById("task-list");
const btn = document.querySelector(".btn");

// add new task to the list
function addTask() 
{
    let task_value = input_task.value;
    if (!task_value)
    {
        alert("Please enter a task   :-(");
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
}

btn.addEventListener("click", addTask);