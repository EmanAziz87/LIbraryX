"use strict"

const form = document.getElementById('main-form');
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    form.addEventListener('submit', function(e) {
        //prevents refreshing of page after each submission
        e.preventDefault();
    });
}


console.log(myLibrary);
addBookToLibrary();
