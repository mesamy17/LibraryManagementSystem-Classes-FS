const a = require("./addData");

function reserve(bookId, memberId) {
  try {
    a.add("./data/reserve/" + bookId + ".json", memberId);
  } catch (error) {
    console.log("Unable reserve");
  }
}

module.exports = { reserve };
