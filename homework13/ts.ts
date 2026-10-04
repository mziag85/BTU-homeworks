const input = document.querySelector("input");

const button_add = document.querySelector("button");

const todo_list = document.querySelector(".todo-list");

if (input && button_add && todo_list) {
    
    button_add.addEventListener("click", function () {

        if (input.value.trim() === "") {
            return;
        }

        const newTask = document.createElement("div");

        const taskText = document.createElement("span");
        taskText.textContent = input.value;

        newTask.appendChild(taskText);

        const edit = document.createElement("button");
        edit.textContent = "edit";

        newTask.appendChild(edit);

        edit.addEventListener("click", function () {
          
            if (taskText.textContent !== null) {
                input.value = taskText.textContent;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";

        newTask.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            newTask.remove();
        });

        todo_list.appendChild(newTask);

        input.value = "";
    });

}