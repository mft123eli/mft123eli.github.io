"use strict";

const assert = require("assert"); 
const myExports = require("./libraryObj.js"); 
const findTitles = myExports.findTitles; 
const addBook = myExports.addBook;
const findIDs = myExports.findIDs;
const findAuthors = myExports.findAuthors;
/* global assert findTitles findAuthors findIDs addBook */
/*
Write a JavaScript program that will accept title, author, and libraryID values from an HTML page and create new book objects for each entry.  
• Before creating the webpage first write and test the following JavaScript functions:
o addBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, which will be represented as a global array named libraryBooks.  addBook should return the newly created book.
o findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
 
describe("library", function () {
  //This should be used as the "library database" for testing--included in app.js
  // let library = [
  //   { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  //   { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  //   {
  //     title: "Mockingjay: The Final Book of The Hunger Games",
  //     author: "Suzanne Collins",
  //     libraryID: 3245,
  //   },
  // ];
 
  const titles = [
    "Mockingjay: The Final Book of The Hunger Games",
    "The Road Ahead",
    "Walter Isaacson",
  ];
  const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
  // const ids = [1254, 3245, 4264];
  const ids = [1254, 3245, 4264];
 
  it("find all authors titles", function () {
    assert.deepEqual(findTitles(), titles);
  });
 
  it("find authors name in the book", function () {
    assert.deepEqual(findAuthors(), authors);
  });
 
  it("find  authors ids in proprties", function () {
    assert.deepEqual(findIDs(), ids);
  });
 
  it("add all the information to book", function () {
    const publishBook = { title: "My New Book", author: "Me Too", libraryID: 1144 };
    ids.push(1144);
    ids.sort();
 
    assert.deepEqual(addBook("My New Book", "Me Too", 1144), publishBook);
    assert.deepEqual(findIDs(), ids);
  });
});