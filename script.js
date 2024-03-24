const book1 = {
  author: "George Orwell",
  title: "Homage to Catalonia",
  pages: 378,
  read: true,
};

const book2 = {
  author: "Jonathan Swift",
  title: "Gullivers Travels",
  pages: 328,
  read: true,
};

const book3 = {
  author: "Albert Camus",
  title: "The Stranger",
  pages: 268,
  read: false,
};

const myLibrary = [book1, book2, book3];
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const exitModalBtn = document.querySelector(".exit-btn");
const openModalBtn = document.querySelector(".open-btn");
const submitBtn = document.querySelector("#submit");

exitModalBtn.addEventListener("click", closeModal);
openModalBtn.addEventListener("click", openModal);
submitBtn.addEventListener("click", submitForm);

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function submitForm(e) {
  e.preventDefault();
  let author = document.querySelector("#author");
  let title = document.querySelector("#title");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#already-read");
  const newBook = new Book(author.value, title.value, pages.value, read.value);
  myLibrary.push(newBook);
  closeModal();
}

function closeModal() {
  modal.setAttribute("hidden", "");
  overlay.setAttribute("hidden", "");
}

function openModal() {
  modal.removeAttribute("hidden", "");
  overlay.removeAttribute("hidden", "");
}

function addBookToLibrary() {
  const bookAuthor = document.querySelector(".book-author");
  const bookName = document.querySelector(".book-name");
  const bookPages = document.querySelector(".book-pages");
  const bookRead = document.querySelector(".book-read");
}
