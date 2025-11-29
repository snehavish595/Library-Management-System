class Storage {
  static getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
  }

  static saveBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static deleteBook(index) {
    let books = Storage.getBooks();
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
  }
}
