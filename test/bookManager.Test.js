const assert = require("assert");
const fs = require("fs");

const bookManager = require("../bookManager");

describe("Book Manager", function () {
  it("should create a new book", function () {
    bookManager.addBook("B101", "Gravity", "Isac Newton", 2);

    assert.strictEqual(fs.existsSync("./data/book/B101.json"), true);

    const book = JSON.parse(fs.readFileSync("./data/book/B101.json"));

    assert.strictEqual(book.id, "B101");
    assert.strictEqual(book.BookTitle, "Gravity");
    assert.strictEqual(book.BookAuthor, "Isac Newton");
    assert.strictEqual(book.TotalCopies, 2);
    assert.strictEqual(book.AvailableCopies, 2);
  });

  it("should create json file", function () {
    bookManager.addBook("B102", "Java", "James", 1);

    assert.ok(fs.existsSync("./data/book/B102.json"));
  });

  it("should make Total copies zero if Total copies provided are negative", function () {
    bookManager.addBook("B103", "Science", "Varsha", -5);

    assert.strictEqual(fs.existsSync("./data/book/B103.json"), true);

    const book = JSON.parse(fs.readFileSync("./data/book/B103.json"));

    assert.strictEqual(book.TotalCopies, 0);
    assert.strictEqual(book.AvailableCopies, 0);
  });
});
