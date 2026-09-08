// # საშინაო დავალება 2

// **საყიდლების კალათა**

// 1. შექმენით ობიექტი `cartItem`, რომელსაც ექნება შემდეგი თვისებები: `name` (დასახელება), `price` (ფასი), `quantity` (რაოდენობა).
// 2. დაამატეთ getter `totalPrice`, რომელიც დააბრუნებს `price * quantity`-ს.
// 3. დაამატეთ setter `quantity`, რომელიც მხოლოდ დადებით რიცხვებს დაუშვებს.
// 4. შექმენით მასივი `cart` სამი ელემენტით და ციკლის საშუალებით გამოთვალეთ კალათის საერთო ღირებულება.

const cartItem = {
    name: "ვაშლი",
    price: 1,
    quantity: 10,
    
    get totalPrice() {
        return this.price * this.quantity;
    },
    

    set quantity(okey){
        if (okey>0){
           this._quantity = okey
            
        }
    }
}


const cart = [
    {
     name: "მსხალი",
     price: 2
    },
    {
     name: "ბროწეული",
     price: 3
    },
    {
    name: "ლიმონი",
    price: 4

    }
]

function total(){
    let sum = 0; 

    for (let i =0; i< cart.length; i++){
        sum = sum + cart[i].price;
    }
    return sum;
}
console.log(total());
