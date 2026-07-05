const r = require("./readData");
const w = require("./writeData");
const brr = require("./borrowRecord");
const a = require("./addData");
const { error } = require("node:console");

function borrowBook(memberId, bookId) {
  try {
    let membersData = r.read("./data/member/" + memberId + ".json");
    let booksData = r.read("./data/book/" + bookId + ".json");
    let reserveData = r.read("./data/reserve/" + bookId + ".json");

    if (booksData["AvailableCopies"] > 0) {
      if (membersData["borrowLimit"] > 0) {
        booksData["AvailableCopies"] = booksData["AvailableCopies"] - 1;
        membersData["borrowLimit"] = membersData["borrowLimit"] - 1;

        let borrowId = memberId + bookId;
        let data = new brr(memberId, bookId);

        w.write("./data/book/" + bookId + ".json", booksData);
        w.write("./data/member/" + memberId + ".json", membersData);
        w.write("./data/borrow/" + memberId + bookId + ".json", data);
      } else {
        console.log("cannot issue book to member cause of unavailable limit");
        throw new Error("Unavailable limit");
      }
    } else {
      a.add("./data/reserve/" + bookId + ".json", memberId);
      console.log("added member in reserve que");
      throw error("book unavailable");
    }

    console.log("book issued successfully");
  } catch (error) {
    console.log("book not issued");
  }
}

module.exports = { borrowBook };
