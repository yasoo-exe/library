function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

const myLibrary = [];
let bookTable = document.querySelector("tbody");

//this function runs everytime a user clicks on the Add button to add a new book
document.querySelector("#add").addEventListener("click", addBookToLibrary);
function addBookToLibrary() {
  let author = document.querySelector("#author").value;
  let title = document.querySelector("#title").value;
  let pages = document.querySelector("#pages").value;
  let status = document.querySelector("#status").value;

  let newBook = new Book(author, title, pages, status);
  myLibrary.push(newBook);

  bookTable.innerHTML = "";

  myLibrary.forEach((book) => {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td>${
            book.status === "Yes"
              ? "<button id='toggleStatus'>Y</button>"
              : "<button id='toggleStatus'>N</button>"
          }</td>
          `;
    bookTable.appendChild(newRow);
  });
}
