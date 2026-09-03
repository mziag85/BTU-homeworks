// # დავალება: ერეის ელემენტების შეკრება ციკლებით

// ## აღწერა
// გაცემულია ერთგანზომილებიანი რიცხვების მასივი.  
// დაწერე პროგრამა, რომელიც ამ მასივის ყველა ელემენტს შეაკრებს და დაბეჭდავს **ჯამს** გამოყენებით:

// 1. `while` ციკლი  
// 2. `do...while` ციკლი  
// 3. `for` ციკლი  

// ---

// ## გადასაცემი ერეი
// ```js
// const arr = [3, 7, -2, 10, 0, 5];




const arr = [3, 7, -2, 10, 0, 5];
let sum = 0;
let i = 0;

while (i < arr.length) {
  sum = sum + arr[i++];
}
console.log(sum);

---


const arr = [3, 7, -2, 10, 0, 5];
let sum = 0;
let i = 0;

do {
  sum = sum + arr[i++];
} while (i < arr.length);
console.log(sum);


---


const arr = [3, 7, -2, 10, 0, 5];
let sum = 0;

for(let i = 0;  i< arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);


