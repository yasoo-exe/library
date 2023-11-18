"use strict";

// prevent default on the submit button
document.querySelector("#add").addEventListener("click", (e) => {
  e.preventDefault();
});

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

/*function that'll run once the user adds a new book, it'll take user's input and 
create a newBook using the class Book and then add it to the myLibrary array, 
once the book has been added to the library, the displayBooks function will be called which will
display books on the webpage*/
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = Number(document.querySelector("#pages").value); //we need a number as pages value
  let readStatus = document.querySelector("#status").value;

  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);

  displayBooks();
}

//function that displays books on the page, it creates a new row for the table and iterates over every element of the myLibrary array
function displayBooks() {
  document.querySelector("tbody").innerText = "";

  myLibrary.forEach((book, index) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>${book.readStatus}</td>
  <td class="remove" id="${index}">X</td>
  `;

    document.querySelector("tbody").append(newRow);
  });
  removeBookFromLibrary();
}

//function that removes a book from the table once the cross button is clicked
function removeBookFromLibrary() {
  document.querySelectorAll(".remove").forEach((book) => {
    book.addEventListener("click", () => {
      myLibrary.splice(book.id, 1);
      displayBooks();
    });
  });
}
