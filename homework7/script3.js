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




const arr2 = [3, 7, -2, 10, 0, 5];
let sum2 = 0;
let i2 = 0;

do {
  sum2 = sum2 + arr2[i2++];
} while (i2 < arr2.length);
console.log(sum2);





const arr3 = [3, 7, -2, 10, 0, 5];
let sum3 = 0;

for(let i = 0;  i< arr.length; i++) {
  sum3 = sum3 + arr[i];
}
console.log(sum3);


