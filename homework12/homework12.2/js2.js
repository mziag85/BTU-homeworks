// ### Build todo using javascript & html based on this figma

// https://www.figma.com/design/tv3ST8daUt5jR1SHIG70lH/UX-Pilot--AI-UI-Generator---AI-Wireframe-Generator--Community-?node-id=1-4&t=8j5BDD7f3fISqRep-0


const input = document.querySelector("input");

const button_add = document.querySelector("button");

const todo_list = document.querySelector(".todo-list");

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
      
        input.value = taskText.textContent;
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