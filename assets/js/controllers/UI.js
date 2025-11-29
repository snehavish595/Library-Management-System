class UI {
  static displayBooks() {
    const books = Storage.getBooks();
    const list = document.getElementById("bookCollection");
    list.innerHTML = "";

    books.forEach((book, index) => {
      UI.addBookToUI(book, index);
    });
  }

  static addBookToUI(book, index) {
    const list = document.getElementById("bookCollection");
    list.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="book-card shadow-sm">
          <h5>${book.name}</h5>
          <p><strong>Author:</strong> ${book.author}</p>
          <p class="badge bg-secondary">${book.type}</p>
          <button class="btn btn-danger btn-sm w-100 mt-2 delete" data-id="${index}">
            <i class="fas fa-trash"></i> Remove
          </button>
        </div>
      </div>
    `;
  }
}
