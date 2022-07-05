import displayBookCards from './displayBookCards';

const formWindow = document.querySelector('.form-div-container');
const dimPage = document.querySelector('.page-dim');
const form = document.getElementById('main-form');

export let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const bookFormSubmission = () => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const titleInput = document.getElementById('book-title').value;
        const authorInput = document.getElementById('book-author').value;
        const pagesInput = document.getElementById('book-page-count').value;
        resetFormAndPushToArray();

        function resetFormAndPushToArray() {
            const entry = new Book(titleInput, authorInput, pagesInput, read);
            myLibrary.push(entry);
            form.reset();
            formWindow.style.cssText = 'display: none;';
            dimPage.style.cssText = 'display:none;';
            displayBookCards();
        }
    });
};

export default bookFormSubmission;
