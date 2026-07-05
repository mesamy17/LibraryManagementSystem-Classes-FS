const r = require("./readData");
const w = require("./writeData");
const Book = require("./book");

function addBook(bookId, bookTitle, bookAuthor, totalCopies) {
  try {
    let data = new Book(bookId, bookTitle, bookAuthor, totalCopies);

    w.write("./data/book/" + bookId + ".json", data);

    console.log("book added");
    console.log(data);
  } catch (error) {
    console.log("unable to add book");
  }
}

module.exports = { addBook };
