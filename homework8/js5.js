// # პროექტი — Todo List Manager (Homework 5)

// ## ამოცანა
// შექმენით მცირე Todo აპლიკაცია პლეინ JavaScript-ით (არ საჭიროებს UI-ს — საკმარისია ფუნქციების გამოძახება). Todos უნდა ინახებოდეს მასივში.

// ## მონაცემთა სტრუქტურა
// ```js
// // დასაწყისისთვის მაგალითი
// const todos = [
//   { id: 1, task: 'Buy groceries', completed: false },
//   { id: 2, task: 'Do homework', completed: true }
// ];
// ```

// ## ფუნქციონალი (სავალდებულო)
// 1) ახალი todo-ს დამატება
//    - პარამეტრები: `task` (string)
//    - ქმნის ობიექტს `{ id, task, completed: false }` და ამატებს მასივში
//    - `id` უნიკალური უნდა იყოს (მაგ. auto-increment)

// 2) todo-ს მონიშვნა შესრულებულად
//    - პარამეტრები: `id`
//    - პოულობს ჩანაწერს და აყენებს `completed: true`

// 3) todo-ს წაშლა
//    - პარამეტრები: `id`
//    - შლის ჩანაწერს მასივიდან

// 4) todos-ის ჩამოთვლა (ლისტინგი)
//    - პარამეტრები: არასავალდებულო `filter` ('all' | 'completed' | 'pending')
//    - აბრუნებს ფილტრირებულ სიას

// ## API-ს პროტოტიპი (სცადეთ ასეთი ხელმოწერები)
// ```js
// function addTodo(task) { /* ... */ }
// function completeTodo(id) { /* ... */ }
// function deleteTodo(id) { /* ... */ }
// function listTodos(filter = 'all') { /* ... */ }
// ```

// ## მაგალითური გამოყენება
// ```js
// let todos = [
//   { id: 1, task: 'Buy groceries', completed: false },
//   { id: 2, task: 'Do homework', completed: true },
// ];

// todos = addTodo(todos, 'Read a book');
// completeTodo(todos, 1);

// console.log(listTodos(todos, 'all'));
// console.log(listTodos(todos, 'completed'));
// console.log(listTodos(todos, 'pending'));
// ```