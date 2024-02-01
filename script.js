function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.onclick = function () {
            
        };

        const taskText = document.createTextNode(taskInput.value);
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);

        

    
        taskInput.value = "";
        checkbox.onclick = function () {
            if (checkbox.checked) {
                taskItem.style.textDecoration = "line-through";
            } else {
                taskItem.style.textDecoration = "none";
            }
        };
        
    }
}




