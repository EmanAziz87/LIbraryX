"use strict"

const form = document.getElementById('main-form');
const readButton = document.getElementById('read');
const readingButton = document.getElementById('reading');
const addBookButton = document.querySelector('.add-book');
const formWindow = document.querySelector('.form-div-container');
const dimPage = document.querySelector('.page-dim');
const formWindowClose = document.querySelector('.close-form');
const cardContainer = document.querySelector('#card-container');
const editMode = document.querySelector('.edit-mode');
const deleteCardButton = document.querySelector('.delete-card-button'); 


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

function bookFormSubmission() {
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
            displayBookCards();
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

if (myLibrary.length > 0) {
    editMode.addEventListener('click', () => {
        deleteCardButton.style.display = 'display: null;';
    });
}



function displayBookCards() {
    for (let i = myLibrary.length-1; i < myLibrary.length; i++) {
        const newCard = document.createElement('div');
        const newCardContents = document.createElement('div');
        const newCardExit = document.createElement('button');
        
        const titleContent = document.createElement('p');
        const authorContent = document.createElement('p');
        const pagesContent = document.createElement('p');
        const readOrNotContent = document.createElement('p');

        newCardExit.textContent = 'X';
        cardContainer.appendChild(newCard);

        newCard.className = 'card'; 
        newCardContents.className = 'card-subcontainer'; 
        newCardExit.className = 'delete-card-button'; 
        titleContent.className = 'title';
        authorContent.className = 'author';
        pagesContent.className = 'page-count';
        readOrNotContent.className = 'read-or-reading';

        newCard.appendChild(newCardExit);
        newCard.appendChild(newCardContents);
        
        newCardContents.appendChild(titleContent);
        newCardContents.appendChild(authorContent);
        newCardContents.appendChild(pagesContent);
        newCardContents.appendChild(readOrNotContent);

        titleContent.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
        authorContent.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
        pagesContent.textContent = `Pages: ${(myLibrary[myLibrary.length - 1].pages).toString()}`;
        readOrNotContent.textContent = myLibrary[myLibrary.length - 1].read ? 'Read' : 'Reading';
    }
}
bookFormSubmission();
       
        
        





