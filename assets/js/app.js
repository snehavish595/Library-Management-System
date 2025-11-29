document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.getElementById("libraryForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("bookName").value;
  const author = document.getElementById("author").value;
  const type = document.getElementById("bookType").value;

  const book = new Book(name, author, type);

  Storage.saveBook(book);
  UI.displayBooks();

  e.target.reset();
});

// DELETE EVENT
document.getElementById("bookCollection").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const index = e.target.getAttribute("data-id");
    Storage.deleteBook(index);
    UI.displayBooks();
  }
});

// DARK MODE
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
