const r = require("./readData");
const w = require("./writeData");
const brr = require("./borrowRecord");

function borrowBook(memberId, bookId) {
  try {
    let membersData = r.read("./data/member/" + memberId + ".json");
    let booksData = r.read("./data/book/" + bookId + ".json");
    console.log(booksData);
    console.log(membersData);

    if (booksData["AvailableCopies"] > 0) {
      if (membersData["borrowLimit"] > 0) {
        booksData["AvailableCopies"] = booksData["AvailableCopies"] - 1;
        membersData["borrowLimit"] = membersData["borrowLimit"] - 1;

        let borrowId = memberId + bookId;
        let data = new brr(memberId, bookId);

        w.write("./data/book/" + bookId + ".json", booksData);
        w.write("./data/member/" + memberId + ".json", membersData);
        w.write("./data/borrow/" + memberId + bookId + ".json", data);
      }
    }

    console.log("book issued successfully");
  } catch (error) {
    console.log("unable to issue book");
  }
}

module.exports = { borrowBook };
