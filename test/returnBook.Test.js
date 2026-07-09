const assert = require("assert");
const fs = require("fs");

const ret = require("../returnBook");

describe("return Book", function () {
  it("should return a book", function () {
    ret.returnBook("M101", "B101", "2026-07-01T10:30:00");

    let borrowData = JSON.parse(fs.readFileSync("./data/borrow/M101B101.json"));

    assert.strictEqual(borrowData.returnStatus, "RETURNED");
  });

  it("should return 0 Rs as fee if book returned within Due date", function () {
    ret.returnBook("M101", "B101", "2026-07-01T10:30:00");

    let borrowData = JSON.parse(fs.readFileSync("./data/borrow/M101B101.json"));

    assert.strictEqual(borrowData.LateFee, "0 Rs");
  });

  it("should return Late fee if book returned after Due date", function () {
    ret.returnBook("M101", "B101", "2026-07-20T10:30:00");

    let borrowData = JSON.parse(fs.readFileSync("./data/borrow/M101B101.json"));

    assert.strictEqual(borrowData.LateFee, "160 Rs");
  });

    it("should self allocate book to next member if reservation", function () {
    ret.returnBook("M101", "B102", "2026-07-01T10:30:00");

    assert.strictEqual(fs.existsSync("./data/borrow/M103B102.json"), true);
  });
});
