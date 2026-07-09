const assert = require("assert");
const fs = require("fs");

const borrowManager = require("../borrowManager");
const bookManager = require("../bookManager");
const memberManager = require("../memberManager");

describe("Borrow Manager", function () {
  it("should borrow a book", function () {
    borrowManager.borrowBook("M101", "B101", "2026-06-20T10:30:00");

    assert.ok(fs.existsSync("./data/borrow/M101B101.json"));
  });

  it("should decrease available copies", function () {
    borrowManager.borrowBook("M101", "B102", "2026-06-20T10:30:00");

    const book = JSON.parse(fs.readFileSync("./data/book/B102.json"));

    assert.strictEqual(book.AvailableCopies, 0);
  });

  it("should add member in reservation if book unavailable", function () {
    borrowManager.borrowBook("M103", "B102", "2026-06-20T10:30:00");

    const book = JSON.parse(fs.readFileSync("./data/reserve/B102.json"));

    assert.deepStrictEqual(book, ["M103"]);
  });

  it("should maintain the reservation que in order", function () {
    borrowManager.borrowBook("M104", "B102", "2026-06-20T10:30:00");

    const book = JSON.parse(fs.readFileSync("./data/reserve/B102.json"));

    assert.deepStrictEqual(book, ["M103", "M104"]);
  });

  it("should not add duplicates in reservation que", function () {
    borrowManager.borrowBook("M103", "B102", "2026-06-20T10:30:00");

    const book = JSON.parse(fs.readFileSync("./data/reserve/B102.json"));

    assert.deepStrictEqual(book, ["M103", "M104"]);
  });
});
