// # დავალება 1 — პალინდრომის ფუნქცია (isPalindrome)

// შექმენით ფუნქცია `isPalindrome(str)`, რომელიც აბრუნებს `true`-ს, თუ გადაცემული სტრიქონი წინიდანაც და უკანიდანაც ერთნაირად იკითხება; წინააღმდეგ შემთხვევაში — `false`.

// ## მაგალითები
// ```js
// console.log(isPalindrome("madam"));                         // true
// console.log(isPalindrome("racecar"));                       // true
// console.log(isPalindrome("hello"));                         // false
// console.log(isPalindrome("A man a plan a canal Panama"));   // true
// ```


// ---

function isPalindrome(str) {
    str = str.toLowerCase();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
    
    
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));  
console.log(isPalindrome("A man a plan a canal Panama"));
