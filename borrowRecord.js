class BorrowRecord {
  constructor(memberId, bookId, borrowDate) {
    this.borrowId = memberId + bookId;
    this.memberId = memberId;
    this.bookId = bookId;
    this.borrowDate = new Date(borrowDate);
  }
}

module.exports = BorrowRecord;
