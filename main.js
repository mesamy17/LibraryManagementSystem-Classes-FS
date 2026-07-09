const book = require("./bookManager");
const member = require("./memberManager");
const borrow = require("./borrowManager");
const ret = require("./returnBook");

//Add book
book.addBook("B101", "The Jungel", "Sam", 10);
book.addBook("B102", "Physics Digest", "jhon", 2);
book.addBook("B103", "Chemistry Digest", "mark", 1);
book.addBook("B104", "Maths Digest", "Josep", 2);
book.addBook("B105", "EGG", "Arpit", 2);
// Add invalid book quantity
book.addBook("B106", "Dictionary", "Oxford", -5);

// Add members STANDARD
member.addMember("M101", "Riya", "STANDARD");
// Add member PREMIUM
member.addMember("M102", "Jay", "PREMIUM");
// Add invalid membership type
member.addMember("M103", "Asmi", "PLATINUM");

// Borrow books till limit for standard member
borrow.borrowBook("M101", "B101", "2026-06-20T10:30:00");
borrow.borrowBook("M101", "B102", "2026-06-20T10:30:00");
borrow.borrowBook("M101", "B103", "2026-06-20T10:30:00");
// borrow book over set limit
borrow.borrowBook("M101", "B104", "2026-06-20T10:30:00");
// Borrow invalid book
borrow.borrowBook("M101", "B110", "2026-06-20T10:30:00");

// Borrow books for premium member
borrow.borrowBook("M102", "B101", "2026-06-20T10:30:00");
borrow.borrowBook("M102", "B102", "2026-06-20T10:30:00");
//Borrw book that is unavailable /reservation
borrow.borrowBook("M102", "B103", "2026-06-20T10:30:00");

// return book on time
ret.returnBook("M101", "B101", "2026-07-01T11:30:00");

// returning book late
ret.returnBook("M101", "B102", "2026-08-08T10:30:00");

// Return the book/automatic allocating the book to next in reserve
ret.returnBook("M101", "B103", "2026-07-01T10:30:00");
