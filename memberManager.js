const member = require("./member");
const w = require("./writeData");

function addMember(MemberId, MemberName, MembershipType) {
  try {
    let data = new member(MemberId, MemberName, MembershipType);

    w.write("./data/member/" + MemberId + ".json", data);

    console.log("member crated successfully");
    console.log(data);
  } catch (error) {
    console.log("unable to crate member");
  }
}

module.exports = { addMember };
