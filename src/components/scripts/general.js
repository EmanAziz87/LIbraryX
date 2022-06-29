'use strict';

const form = document.getElementById('main-form');
const readButton = document.getElementById('read');
const readingButton = document.getElementById('reading');
const addBookButton = document.querySelector('.add-book');
const formWindow = document.querySelector('.form-div-container');
const dimPage = document.querySelector('.page-dim');
const formWindowClose = document.querySelector('.close-form');
const cardContainer = document.querySelector('#card-container');
const editMode = document.querySelector('.edit-mode');

const general = () => {
    let read = false;
    let myLibrary = [];
    let editModeState = false;

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    function addBookButtonToggle() {
        addBookButton.addEventListener('click', () => {
            if (!editModeState) {
                formWindow.style.cssText = 'display: flex;';
                dimPage.style.cssText =
                    'z-index: 3; position:absolute; width:100vw; height:100vh; background-color: rgba(0, 0, 0, 0.281);';
            } else {
                alert('You can not add books while in edit mode');
            }
        });
    }

    function readButtonsForm() {
        readButton.addEventListener('click', () => {
            read = true;
        });

        readingButton.addEventListener('click', () => {
            read = false;
        });
    }

    function closeFormWindow() {
        formWindowClose.addEventListener('click', () => {
            formWindow.style.cssText = 'display: none;';
            dimPage.style.cssText = 'display:none;';
            form.reset();
        });

        document.addEventListener('click', (event) => {
            if (event.target === dimPage) {
                formWindow.style.cssText = 'display: none;';
                dimPage.style.cssText = 'display:none;';
                form.reset();
            }
        });
    }

    function editModeToggle() {
        editMode.addEventListener('click', () => {
            if (myLibrary.length > 0) {
                editModeState = !editModeState;
                if (editModeState) {
                    document.querySelector(
                        'aside > div > button.edit-mode'
                    ).style.cssText = 'background-color: red;';
                } else {
                    document.querySelector(
                        'aside > div > button.edit-mode'
                    ).style.cssText = 'background-color:';
                }
                const deleteCardButton = cardContainer.querySelectorAll(
                    '.delete-card-button'
                );
                deleteCardButton.forEach((element) => {
                    element.style.cssText = `display: ${
                        editModeState ? 'inline-block;' : 'none;'
                    }`;
                    element.addEventListener('click', () => {
                        element.parentElement.remove();
                        myLibrary.splice(
                            myLibrary.findIndex(function (book) {
                                return (
                                    `Title: ${book.title}` ===
                                    element.nextSibling.firstChild.textContent
                                );
                            }),
                            1
                        );
                        if (myLibrary.length === 0) {
                            document.querySelector(
                                'aside > div > button.edit-mode'
                            ).style.cssText = 'background-color:';
                            editModeState = false;
                        }
                    });
                });
            } else {
                alert('You need to add books to your library to edit');
            }
        });
    }

    function bookFormSubmission() {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const titleInput = document.getElementById('book-title').value;
            const authorInput = document.getElementById('book-author').value;
            const pagesInput = document.getElementById('book-page-count').value;
            resetFormAndPushToArray();

            function resetFormAndPushToArray() {
                const entry = new Book(
                    titleInput,
                    authorInput,
                    pagesInput,
                    read
                );
                myLibrary.push(entry);
                form.reset();
                formWindow.style.cssText = 'display: none;';
                dimPage.style.cssText = 'display:none;';
                displayBookCards();
                console.log(myLibrary);
            }
        });
    }

    function displayBookCards() {
        const newCard = document.createElement('div');
        const newCardContents = document.createElement('div');
        const newCardExit = document.createElement('button');

        const titleContent = document.createElement('p');
        const authorContent = document.createElement('p');
        const pagesContent = document.createElement('p');
        const readOrNotContent = document.createElement('p');

        newCardExit.textContent = 'X';
        cardContainer.appendChild(newCard);

        newCard.className = `card`;
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

        titleContent.textContent = `Title: ${
            myLibrary[myLibrary.length - 1].title
        }`;
        authorContent.textContent = `Author: ${
            myLibrary[myLibrary.length - 1].author
        }`;
        pagesContent.textContent = `Pages: ${myLibrary[
            myLibrary.length - 1
        ].pages.toString()}`;
        readOrNotContent.textContent = myLibrary[myLibrary.length - 1].read
            ? 'Read'
            : 'Reading';
    }

    addBookButtonToggle();
    closeFormWindow();
    editModeToggle();
    readButtonsForm();
    bookFormSubmission();
};

export default general;
