// const bookAuthor = document.querySelector(".book-author");
//   const bookName = document.querySelector(".book-name");
//   const bookPages = document.querySelector(".book-pages");
//   const bookRead = document.querySelector(".book-read");

const book1 = new Book("George Orwell", "Homage to Catalonia", 378, "yes");

const book2 = new Book("Jonathan Swift", "Gullivers Travels", 328, "yes");

const book3 = new Book("Albert Camus", "The Stranger", 268, "--");

const myLibrary = [book1, book2, book3];
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const exitModalBtn = document.querySelector(".exit-btn");
const openModalBtn = document.querySelector(".open-btn");
const submitBtn = document.querySelector("#submit");

addBookToDom();

exitModalBtn.addEventListener("click", closeModal);
openModalBtn.addEventListener("click", openModal);
submitBtn.addEventListener("click", submitForm);

// Constructor function to create books

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function (hasBeenRead) {
  console.log(this);
  this.read = hasBeenRead;
};

// Function to create new book object and adds it to library

function submitForm(e) {
  let author = document.querySelector("#author");
  let title = document.querySelector("#title");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#already-read");

  // Add basic form validation before preventing defualt.
  if (author.value === "" || title.value === "") {
    return;
  }

  e.preventDefault();
  const newBook = new Book(
    author.value,
    title.value,
    pages.value === "" ? "na" : pages.value,
    read.value
  );
  myLibrary.push(newBook);

  addBookToDom();
  author.value = "";
  title.value = "";
  pages.value = "";
  read.value = "";
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

// Loops through library array an adds each books details to DOM. Also adds toggle button for if read or not.

function addBookToDom() {
  const bookList = document.querySelector(".book-list");
  //Clears previously populated booklist
  bookList.textContent = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const htmlBlockOfBook = `<input type="button" class="remove-book-btn" data-id="${i}" value="&#x1f5d1"/><h3 class="book-author">${
      myLibrary[i].author
    }</h3>
    <h4 class="book-name">${myLibrary[i].title}</h4>
    <span>
      <p>Pages:<span class="book-pages">${myLibrary[i].pages}</span></p>
      <p>
      <label for="already-read">Already Read</label>
          <select name="read" id="already-read" required>
            <option ${
              myLibrary[i].read === "--" ? `selected` : ``
            } value="&#x1F937">&#x1F937</option>
            <option ${
              myLibrary[i].read === "yes" ? `selected` : ``
            } value="Yes">Yes</option>
            <option ${
              myLibrary[i].read === "no" ? `selected` : ``
            } value="No">No</option>
          </select>
    </p>
    </span>
   `;
    /* <p>Read:<span class="book-read">${myLibrary[i].read}</span></p> */

    const li = document.createElement("li");
    li.classList.add("book");
    li.innerHTML = htmlBlockOfBook;
    bookList.append(li);
  }

  addEventListeners();
}

{
}

// Function to add event listner to current delete button of books currently in myLibraryfu
// To be run every time the Library is updated or location in myLibrary array will be out of sync.

function addEventListeners() {
  const [...arrayOfDeleteButton] =
    document.querySelectorAll(".remove-book-btn");

  arrayOfDeleteButton.forEach((element) => {
    element.addEventListener("click", () => {
      myLibrary.splice(element.dataset.id, 1);
      addBookToDom();
    });
  });
}
