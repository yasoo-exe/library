"use strict";

// library to store all the books
const myLibrary = [];

//constructor to create book objects
class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

//method on the class to change the readStatus of the book
Book.prototype.changeReadStatus = function () {
  this.readStatus == "No"
    ? (this.readStatus = "Yes")
    : (this.readStatus = "No");
};

/*function that'll run once the user adds a new book, it'll take user's input and 
create a newBook using the class Book and then add it to the myLibrary array, 
once the book has been added to the library, the displayBooks function will be called which will
display books on the webpage*/
document.querySelector("#add").addEventListener("click", addBookToLibrary);
function addBookToLibrary(event) {
  let title = document.querySelector("#title").value;
  if (title === "") {
    document.querySelector("#bookTitleError").style.display = "inline";
    return;
  } else {
    document.querySelector("#bookTitleError").style.display = "none";
    let author = document.querySelector("#author").value;
    let pages = Number(document.querySelector("#pages").value); //we need a number as pages value
    let readStatus = document.querySelector("#status").value;

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);

    displayBooks();
  }
}

//function that displays books on the page, it creates a new row for the table and iterates over every element of the myLibrary array
function displayBooks() {
  document.querySelector("tbody").innerText = "";

  myLibrary.forEach((book, index) => {
    const newRow = document.createElement("tr");
    newRow.setAttribute("class", "lh-lg");
    newRow.innerHTML = `
  <th scope="row" class="text-center">${index + 1}</th>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td class="text-end">${book.pages}</td>
  <td class="currentStatus" statusChangeId=${index}>${book.readStatus}</td>
  <td class="text-center"><button type="button"
  class="btn btn-outline-danger btn-sm remove" dataRemoveId="${index}">remove</button></td>
  `;

    document.querySelector("tbody").append(newRow);
  });
  removeBookFromLibrary();
  readStatusModification();
}

//function that removes a book from the table once the cross button is clicked
function removeBookFromLibrary() {
  document.querySelectorAll(".remove").forEach((bookToBeRemoved) => {
    bookToBeRemoved.addEventListener("click", () => {
      myLibrary.splice(bookToBeRemoved.getAttribute("dataRemoveId"), 1);
      displayBooks();
    });
  });
}

//function that changes read status of the book
function readStatusModification() {
  document.querySelectorAll(".currentStatus").forEach((statusBeChanged) => {
    statusBeChanged.addEventListener("click", () => {
      myLibrary[
        statusBeChanged.getAttribute("statusChangeId")
      ].changeReadStatus();
      displayBooks();
    });
  });
}
