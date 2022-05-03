"use strict"

const form = document.getElementById('main-form');
const readButton = document.getElementById('read');
const readingButton = document.getElementById('reading');


let read = false;
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

readButton.addEventListener('click', () => {
    read = true;
});

readingButton.addEventListener('click', () => {
    read = false;
});

function addBookToLibrary() {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const titleInput = document.getElementById('book-title').value;
        const authorInput = document.getElementById('book-author').value;
        const pagesInput = document.getElementById('book-page-count').value;

        const entry = new Book(titleInput, authorInput, pagesInput, read);
        myLibrary.push(entry);
        form.reset();
        console.log(myLibrary);


    });
}

function displayCard() {
    
}

addBookToLibrary();

