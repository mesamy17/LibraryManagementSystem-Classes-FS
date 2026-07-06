const book = require("./bookManager");
const member = require("./memberManager");
const borrow = require("./borrowManager");
const ret = require("./returnBook");

// Add book
book.addBook("B101", "The Jungel", "Sam", 10);

// Add members
member.addMember("M101", "Riya", "STANDARD");
member.addMember("M102", "Jay", "PREMIUM");

// Borrow a book
borrow.borrowBook("M101", "B101");

// Return the book
ret.returnBook("M101", "B101");
