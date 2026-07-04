class member {
  constructor(MemberId, MemberName, MembershipType) {
    if (MembershipType == "STANDARD") {
      this.id = MemberId;
      this.MemberName = MemberName;
      this.MembershipType = MembershipType;
      this.borrowLimit = 3;
    } else if (MembershipType == "PREMIUM") {
      this.id = MemberId;
      this.MemberName = MemberName;
      this.MembershipType = MembershipType;
      this.borrowLimit = 5;
    } else {
      throw new Error("Invalid Membership Type");
    }
  }
}

module.exports = member;
