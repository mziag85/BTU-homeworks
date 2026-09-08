// # საშინაო დავალება 1

// **პირადი ბიბლიოთეკა**

// 1. შექმენით ობიექტი `book`, რომელსაც ექნება შემდეგი თვისებები: `title` (სათაური), `author` (ავტორი), `yearPublished` (გამოცემის წელი) და `isRead` (წაკითხულია თუ არა).
// 2. დაამატეთ მეთოდი `readBook()`, რომელიც `isRead`-ს მნიშვნელობას შეცვლის `true`-ზე და დაბეჭდავს: "თქვენ წაიკითხეთ [title]".
// 3. შექმენით 3 განსხვავებული წიგნის ობიექტი და შეინახეთ ისინი მასივში `library`.
// 4. გადაუარეთ ფორ ლუპით `library` მასივს და დაბეჭდეთ იმ წიგნების სათაურები, რომლებიც ჯერ არ წაგიკითხავთ.


const book = {
    title: "ვაცის ნადიმი",
    author: "ლიოსა",
    yearPublished: 2000,
    isRead: true,
    
    readBook(){
        this.isRead = true;
        console.log(`თქვენ წაიკითხეთ ${this.title}`)
        
    }
    
}
book.readBook();

const library = [
    {
        title: "გახლეჩილი აპრილი",
        author: "ისმაილ კადარე",
        yearPublished: 1978,
        isRead: false
    },
    {
        title: "წვრილმანების ღმერთი",
        author: "არუნდატი როი",
        yearPublished: 1997,
        isRead: false
    },
    {
        title: "ბუზთა ბატონი",
        author: "უილიამ გოლდინგი",
        yearPublished: 1954,
        isRead: true
    }
];

for (let i =0; i< library.length; i++){
    if(library[i].isRead===false){
     console.log(` ${library[i].title}`);
    }
       
}


