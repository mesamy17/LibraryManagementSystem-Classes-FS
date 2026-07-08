const r = require("./readData");
const w = require("./writeData");
const brr = require("./borrowRecord");
const a = require("./addData");

function borrowBook(memberId, bookId, borrowDate) {
  try {
    let membersData = r.read("./data/member/" + memberId + ".json");
    let booksData = r.read("./data/book/" + bookId + ".json");
    let reserveData = r.read("./data/reserve/" + bookId + ".json");

    if (booksData["AvailableCopies"] > 0) {
      if (membersData["borrowLimit"] > 0) {
        booksData["AvailableCopies"] = booksData["AvailableCopies"] - 1;
        membersData["borrowLimit"] = membersData["borrowLimit"] - 1;

        let borrowId = memberId + bookId;
        let data = new brr(memberId, bookId, borrowDate);

        w.write("./data/book/" + bookId + ".json", booksData);
        w.write("./data/member/" + memberId + ".json", membersData);
        w.write("./data/borrow/" + memberId + bookId + ".json", data);

        let borrowData = r.read("./data/borrow/" + memberId + bookId + ".json");
        let dat = new Date(borrowDate).getTime();
        let due = dat + 1209600000;
        borrowData.dueDate = new Date(due);

        w.write("./data/borrow/" + memberId + bookId + ".json", borrowData);
      } else {
        console.log("cannot issue book to member cause of unavailable limit");
        throw new Error("Unavailable limit");
      }
    } else {
      a.add("./data/reserve/" + bookId + ".json", memberId);
      console.log("added member in reserve que");
      throw new Error("book unavailable");
    }

    console.log("book issued successfully");
  } catch (error) {
    console.log("book not issued");
  }
}

module.exports = { borrowBook };
