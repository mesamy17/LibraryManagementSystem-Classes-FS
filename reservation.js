const r = require("./readData");
const w = require("./writeData");

function reserve(bookId, memberId) {
  try {
    let bookData = r.read("./data/book/" + bookId + ".json");
    let memberData = r.read("./data/member" + memberId + ".json");

    if (bookData["AvailableCopies"] == 0) {
      w.write("./data/reserve/" + bookId + ".json", memberId);
    } else if(bookData["AvailableCopies"] > 0){
      console.log("unable to reserve cause copies are aready available");
    }
  } catch (error) {
    console.log("Unable reserve");
  }
}

module.exports = { reserve };
