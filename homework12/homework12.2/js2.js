// ### Build todo using javascript & html based on this figma

// https://www.figma.com/design/tv3ST8daUt5jR1SHIG70lH/UX-Pilot--AI-UI-Generator---AI-Wireframe-Generator--Community-?node-id=1-4&t=8j5BDD7f3fISqRep-0


const input = document.querySelector("input");
const button = document.querySelector("button");
const todo_list = document.querySelector(".todo-list");

button.addEventListener("click", function(){
 const newTask = document.createElement("div");
 todo_list.appendChild(newTask);

 newTask.textContent = input.value;

});