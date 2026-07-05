const r = require("./readData");
const w = require("./writeData");

function returnBook(memberId, bookId) {
  let memberData = r.read("./data/member/" + memberId + ".json");
  let bookData = r.read("./data/book/" + bookId + ".json");
  let borrowData = r.read("./data/borrow/" + memberId + bookId + ".json");

  memberData["borrowLimit"] = memberData["borrowLimit"] + 1;
  bookData["AvailableCopies"] = bookData["AvailableCopies"] + 1;
  borrowData.returnDate = new Date();
  borrowData.returnStatus = "RETURNED";

  w.write("./data/book/" + bookId + ".json", bookData);
  w.write("./data/member/" + memberId + ".json", memberData);
  w.write("./data/borrow/" + memberId + bookId + ".json", borrowData);
}

module.exports = { returnBook };
