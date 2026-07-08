const assert = require("assert");
const fs = require("fs");

const memberManager = require("../memberManager");

describe("Member Manager", function () {
  it("should create a member", function () {
    memberManager.addMember("M101", "Samarth", "STANDARD");

    assert.strictEqual(fs.existsSync("./data/member/M101.json"), true);

    const member = JSON.parse(fs.readFileSync("./data/member/M101.json"));

    assert.strictEqual(member.id, "M101");
    assert.strictEqual(member.MemberName, "Samarth");
    assert.strictEqual(member.MembershipType, "STANDARD");
    assert.strictEqual(member.borrowLimit, 3);
  });

  it("should create member file", function () {
    memberManager.addMember("M102", "Riya", "PREMIUM");

    assert.ok(fs.existsSync("./data/member/M102.json"));
  });

  it("should create a member with standard membership type", function () {
    memberManager.addMember("M103", "Jay", "STANDARD");

    assert.strictEqual(fs.existsSync("./data/member/M103.json"), true);

    const member = JSON.parse(fs.readFileSync("./data/member/M103.json"));

    assert.strictEqual(member.borrowLimit, 3);
  });

  it("should create a member with premium membership type", function () {
    memberManager.addMember("M104", "Asmi", "PREMIUM");

    assert.strictEqual(fs.existsSync("./data/member/M104.json"), true);

    const member = JSON.parse(fs.readFileSync("./data/member/M104.json"));

    assert.strictEqual(member.borrowLimit, 5);
  });

  it("should not create a member with invalid membership type", function () {
    memberManager.addMember("M105", "Sunil", "ELITE");

    assert.strictEqual(fs.existsSync("./data/member/M105.json"), false);
  });
});
