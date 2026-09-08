// # დავალება 3 — პროდუქციის ფასების ჯამი (sumProductPrices)

// ## დავალება
// შექმენით ფუნქცია `sumProductPrices(products)`, რომელიც აბრუნებს ყველა პროდუქტის ფასების ჯამს.

// მონაცემები:
// ```js
// const products = [
//   { product: "milk", price: 3.2 },
//   { product: "bread", price: 1.5 },
//   { product: "eggs", price: 4.0 },
//   { product: "cheese", price: 6.3 },
//   { product: "apples", price: 2.1 }
// ]
// ```
// sumProductPrices(products) // Outputs 17.1

// ## მოთხოვნები
// - გამოიყენეთ for ...  ციკლი
// - გააკეთეთ დავალება reduce  ის გამოყენებით ასევე მის გარეშე

const products = [
  { product: "milk", price: 3.2 },
  { product: "bread", price: 1.5 },
  { product: "eggs", price: 4.0 },
  { product: "cheese", price: 6.3 },
  { product: "apples", price: 2.1 }
]

function sumProductPrices(products){
    let prices = 0; 
    for(let i=0; i<products.length; i++){
        prices = prices + products[i].price;
    }
    return prices;
}
console.log(sumProductPrices(products));
