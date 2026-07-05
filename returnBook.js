const r = require("./readData");
const w = require("./writeData");
const b = require("./borrowManager");

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

  let reserveData = r.read("./data/reserve/" + bookId + ".json");
  if (reserveData == null) {
    console.log("No reservations");
  } else {
    if (reserveData.length > 0) {
      let nextId = reserveData[0];
      reserveData.splice(0);
      w.write("./data/reserve/" + bookId + ".json", reserveData);
      b.borrowBook(nextId, bookId);
    }
  }
}

module.exports = { returnBook };
