# 🎓 სტუდენტების შეფასების სისტემა – დავალება

## საკითხები
- კლასი (Class)
- კონსტრუქტორი (Constructor)
- მემკვიდრეობა (Inheritance)
- პოლიმორფიზმი (Polymorphism)

## დავალება

1. **შექმენით ბეიზ კლასი `Student`** შემდეგი თვისებებით:
   - `name` (სტრინგი)
   - `grades` (რიცხვების მასივი)
   - მეთოდი: `calculateAverage()` – საშუალო შეფასების გამოთვლისთვის.

2. **შექმენით კლასი (subclasses):**
   - `HighSchoolStudent` → გაუკეთეთ (override) `calculateAverage()` საჭიროების მიხედვით (მაგალითად, სხვა წონების გამოყენებით).  
   - `CollegeStudent` → განსხვავებულად გაუკეთეთ override `calculateAverage()`.

3. **პოლიმორფიზმის დემონსტრაცია:**
   - შექმენით სტუდენტების მასივი (შერეული `HighSchoolStudent` და `CollegeStudent`).  
   - გადაუარეთ მასივს და თითოეული სტუდენტისათვის გამოიძახეთ `calculateAverage()` მეთოდი.  
   - აჩვენეთ, რომ ერთი და იგივე მეთოდი სხვადასხვა ტიპის ობიექტზე სხვადასხვაგვარად მუშაობს.

### საშუალო ქულის გამოთვლის ალგორითმი HighShool ისთვის
const sum = this.grades.reduce((a, b) => a + b, 0);
sum / this.grades.length;

### საშუალო ქულის გამოთვლის ალგორითმი CollegeStudent ისთვის
const sum = this.grades.reduce((a, b) => a + b, 0);
sum / this.grades.length * 1.05;

// პოლიმორფიზმის დემონსტრაცია
const students = [
  new HighSchoolStudent("Alice", [80, 90, 85]),
  new CollegeStudent("Bob", [75, 85, 95])
];

students.forEach(student => {
  console.log(`${student.name} საშუალო შეფასება: ${student.calculateAverage()}`);
});
