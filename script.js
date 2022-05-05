"use strict"

const form = document.getElementById('main-form');
const readButton = document.getElementById('read');
const readingButton = document.getElementById('reading');
const addBookButton = document.querySelector('.add-book');
const formWindow = document.querySelector('.form-div-container');
const dimPage = document.querySelector('.page-dim');
const formWindowClose = document.querySelector('.close-form');

let read = false;
let myLibrary = [];


readButton.addEventListener('click', () => {
    read = true;
});

readingButton.addEventListener('click', () => {
    read = false;
});


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const titleInput = document.getElementById('book-title').value;
        const authorInput = document.getElementById('book-author').value;
        const pagesInput = document.getElementById('book-page-count').value;
        resetFormAndPushToArray();

        function resetFormAndPushToArray() {
            const entry = new Book(titleInput, authorInput, pagesInput, read);
            myLibrary.push(entry);
            form.reset();
            formWindow.style.cssText = 'display: none;';
            dimPage.style.cssText = 'display:none;'

            console.log(myLibrary);
        }
    });
}


addBookButton.addEventListener('click', () => {
    formWindow.style.cssText = 'display: flex;';
    dimPage.style.cssText = 'z-index: 3; position:absolute; width:100vw; height:100vh; background-color: rgba(0, 0, 0, 0.281);'
});

formWindowClose.addEventListener('click', () => {
    formWindow.style.cssText = 'display: none;';
    dimPage.style.cssText = 'display:none;'
    form.reset();
});


function displayCard() {

}

addBookToLibrary();

