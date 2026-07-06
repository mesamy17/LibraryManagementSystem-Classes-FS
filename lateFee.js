const r = require("./readData");
const w = require("./writeData");

function feeCalc(memberId, bookId) {
  let Data = r.read("./data/borrow/" + memberId + bookId + ".json");

  const ret = new Date(Data.returnDate).getTime();
  const due = new Date(Data.dueDate).getTime();

  let OT = ret - due;
  OT = OT / 1000;
  let lateFee = 0;

  while (OT >= 86400) {
    lateFee = lateFee + 10;
    OT = OT - 86400;
  }

  Data.LateTime = lateFee / 10 + " Days";
  Data.LateFee = lateFee + " Rs";

  w.write("./data/borrow/" + memberId + bookId + ".json", Data);
  console.log(
    "Fee written in: ",
    "./data/borrow/" + memberId + bookId + ".json",
  );
}

module.exports = { feeCalc };
