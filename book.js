class book {
  constructor(BookId, BookTitle, BookAuthor, TotalCopies) {
    this.id = BookId;
    this.BookTitle = BookTitle;
    this.BookAuthor = BookAuthor;
    if (TotalCopies < 0) {
      TotalCopies = 0;
    }
    this.TotalCopies = TotalCopies;
    this.AvailableCopies = TotalCopies;
  }
}

module.exports = book;
