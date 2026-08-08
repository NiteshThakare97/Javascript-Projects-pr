const taskInput = document.getElementById("taskInput");
const inputerror = document.getElementById("inputerror");
const taskList = document.getElementById("taskList");
taskList.style.display = "none";

function addTask() {

    let newTaskInput = taskInput.value.trim();

    if (newTaskInput === "") {
        inputerror.innerHTML = "Please Enter something...";
        inputerror.style.color = "red";
    } else {
        inputerror.innerHTML = "";

        taskList.style.display = "block";

        // Create <li> and put inside <ul> 
        const newTask = document.createElement("li");
        taskList.appendChild(newTask);

        // Create <span> for text and put inside <li> 
        let textSpan = document.createElement("span");
        textSpan.textContent = newTaskInput;
        newTask.appendChild(textSpan);

        // Create <div> for buttons and put inside <li> 
        const btnDiv = document.createElement("div");
        newTask.appendChild(btnDiv);

        // Edit task 
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        btnDiv.appendChild(editBtn);
        // edit task function 
        editBtn.addEventListener("click", function() {
            const editInput = document.createElement("input");
            editInput.value = textSpan.textContent;
            newTask.replaceChild(editInput, textSpan);
            editBtn.textContent = "Save";
            editBtn.style.backgroundColor = "green";
        });

        // Save Task
        if (editBtn.textContent = "Save") {
            editBtn.addEventListener("click", function() {
                textSpan.textContent = editInput.value;
                newTask.replaceChild(textSpan, editInput);
                editBtn.textContent = "Edit";
                editBtn.style.backgroundColor = "blue";
            });
        }

        // Delete Task 
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = "red";
        btnDiv.appendChild(deleteBtn);
        // delete task function 
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(newTask);
        });

        taskInput.value = "";

    }
}