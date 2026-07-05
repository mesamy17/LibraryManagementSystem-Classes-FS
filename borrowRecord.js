class BorrowRecord {
  constructor(memberId, bookId) {
    this.borrowId = memberId + bookId;
    this.id = memberId;
    this.id = bookId;
    this.borrowDate = new Date();
    this.dueDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
  }
}

module.exports = BorrowRecord;
