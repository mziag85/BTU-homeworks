// # 🎓 სტუდენტების შეფასების სისტემა – დავალება

const { version } = require("react");

// ## საკითხები
// - კლასი (Class)
// - კონსტრუქტორი (Constructor)
// - მემკვიდრეობა (Inheritance)
// - პოლიმორფიზმი (Polymorphism)

// ## დავალება

// 1. **შექმენით ბეიზ კლასი `Student`** შემდეგი თვისებებით:
//    - `name` (სტრინგი)
//    - `grades` (რიცხვების მასივი)
//    - მეთოდი: `calculateAverage()` – საშუალო შეფასების გამოთვლისთვის.

// 2. **შექმენით კლასი (subclasses):**
//    - `HighSchoolStudent` → გაუკეთეთ (override) `calculateAverage()` საჭიროების მიხედვით (მაგალითად, სხვა წონების გამოყენებით).  
//    - `CollegeStudent` → განსხვავებულად გაუკეთეთ override `calculateAverage()`.

// 3. **პოლიმორფიზმის დემონსტრაცია:**
//    - შექმენით სტუდენტების მასივი (შერეული `HighSchoolStudent` და `CollegeStudent`).  
//    - გადაუარეთ მასივს და თითოეული სტუდენტისათვის გამოიძახეთ `calculateAverage()` მეთოდი.  
//    - აჩვენეთ, რომ ერთი და იგივე მეთოდი სხვადასხვა ტიპის ობიექტზე სხვადასხვაგვარად მუშაობს.

// ### საშუალო ქულის გამოთვლის ალგორითმი HighShool ისთვის
// const sum = this.grades.reduce((a, b) => a + b, 0);
// sum / this.grades.length;

// ### საშუალო ქულის გამოთვლის ალგორითმი CollegeStudent ისთვის
// const sum = this.grades.reduce((a, b) => a + b, 0);
// sum / this.grades.length * 1.05;

// // პოლიმორფიზმის დემონსტრაცია
// const students = [
//   new HighSchoolStudent("Alice", [80, 90, 85]),
//   new CollegeStudent("Bob", [75, 85, 95])
// ];

// students.forEach(student => {
//   console.log(`${student.name} საშუალო შეფასება: ${student.calculateAverage()}`);
// });

class Student{
    name;
    grades;
    constructor (name, grades){
        this.name=name;
        this.grades=grades;


    }
    calculateAverage(){
     let grades = 0;
     for(let i=0; i<this.grades.length;i++){
        grades= grades+this.grades[i];
     }
      
     return grades / this.grades.length;
     
    }


}

class HighSchoolStudent extends Student {
   
   calculateAverage(){
     const sum = this.grades.reduce((a, b) => a + b, 0);
     return sum / this.grades.length;
   }
   
}

class CollegeStudent extends Student{
    calculateAverage(){
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length * 1.05;

  }
}

 const students = [
  new HighSchoolStudent("Alice", [80, 90, 85]),
  new CollegeStudent("Bob", [75, 85, 95])
];

  students.forEach(student => {
  console.log(`${student.name} საშუალო შეფასება: ${student.calculateAverage()}`);
 });







class Vehicle {
   brand;
   model;
   year;
   constructor(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
   }
   getInfo(){
    return Vehicle;
   }

}

class Car extends Vehicle{
   doors;
   constructor(brand,model,year,doors){
    super(brand,model,year)
        this.doors=doors;
    
   }
   getInfo(){
     return `${this.brand} ${this.model} ${this.year} ${this.doors}`;
   }
}


class Motorcycle extends Vehicle{
   engineVolume;
   constructor(brand,model,year,engineVolume){
    super(brand,model,year)
        this.engineVolume=engineVolume;
    
   }
   getInfo(){
    return `${this.brand} ${this.model} ${this.year} ${this.engineVolume}`;
   }
}


const Car = new Car;
const Motorcycle = new Motorcycle;
























