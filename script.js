"use strict";

// prevent default on the submit button
document.querySelector("#add").addEventListener("click", (e) => {
  e.preventDefault();
});

// library to store all the books
const myLibrary = [
  {
    title: "1984",
    author: "George Orwell",
    pages: 80,
    readStatus: "No",
  },
  {
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    pages: 300,
    readStatus: "Yes",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    pages: 360,
    readStatus: "No",
  },
];

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

  myLibrary.forEach((book) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>${book.readStatus}</td>
  <td class="remove">X</td>
  `;

    document.querySelector("tbody").append(newRow);
  });
}
