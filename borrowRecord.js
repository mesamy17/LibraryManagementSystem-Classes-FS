class BorrowRecord {
  constructor(memberId, bookId) {
    this.borrowId = memberId + bookId;
    this.memberId = memberId;
    this.bookId = bookId;
    this.borrowDate = new Date();
    this.dueDate = new Date(Date.now() + 1209600000);
  }
}

module.exports = BorrowRecord;
