"use strict";
 
module.exports = { findTitles, addBook, findIDs, findAuthors }; 
 
let library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
   
    const titles = findTitles();
   
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");
   
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
  }
   
  /**
 *
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
   
    for (let book of library) {
      titles.push(book.title);
    }
    titles.sort();
   
    return titles;
  }
  /**
   *
   * @returns
   */
  function findIDs() {
    let ids = [];
    for (let book of library) {
      ids.push(book.libraryID);
    }
    ids.sort();
    return ids;
  }
  /**
   *
   * @returns
   */
  function findAuthors() {
    let authors = [];
    for (let book of library) {
      authors.push(book.author);
    }
    authors.sort();
    return authors;
  }
  /**
   * @returns {undefined} no return
   * Event handler for Add book button.  Creates and adds book to the library
   */
  function addBook(title, author, libraryID) {
    // const title = document.getElementById("title"); //retrieves the book title from the title textbox
    // const libraryID = document.getElementById("libraryID");
    // const author = document.getElementById("author");
   
    const publishBook = {};
    publishBook.author = author;
    publishBook.libraryID = libraryID;
    publishBook.title = title;
    library.push(publishBook); //finish the implementation -- get the author, create a book object, and add to the library array
    return publishBook;
  }