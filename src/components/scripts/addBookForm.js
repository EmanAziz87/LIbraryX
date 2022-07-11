import displayBookCards from './displayBookCards';
import { editModeState } from './editModeToggle';
import { retrieveBookInfo } from './APIandSearchResults';
import { resetSearchResults } from './APIandSearchResults';

const formWindow = document.querySelector('.form-div-container');
const dimPage = document.querySelector('.page-dim');
const form = document.getElementById('main-form');
const addBookButton = document.querySelector('.add-book');
const formWindowClose = document.querySelector('.close-form');

export let formOpenState = false;
export let myLibrary = [];

function BookSearch(mainSearch) {
    this.mainSearch = mainSearch;
}

const addBookButtonToggle = () => {
    addBookButton.addEventListener('click', () => {
        if (!editModeState) {
            formOpenState = true;
            formWindow.style.cssText = 'display: flex;';
            dimPage.style.cssText =
                'z-index: 3; position:absolute; width:100vw; height:100vh; background-color: rgba(0, 0, 0, 0.281);';
        } else {
            alert('You can not add books while in edit mode');
        }
    });
};

const bookFormSubmission = () => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        formOpenState = false;
        const mainSearchInput = document.getElementById('book-input').value;
        resetSearchResults();
        resetFormAndPushToArray();

        function resetFormAndPushToArray() {
            const entry = new BookSearch(mainSearchInput);
            myLibrary.push(entry);
            console.log(myLibrary);
            retrieveBookInfo(myLibrary[myLibrary.length - 1].mainSearch);
            displayBookCards();
        }
    });
};

const closeFormWindow = () => {
    formWindowClose.addEventListener('click', () => {
        formOpenState = false;
        formWindow.style.cssText = 'display: none;';
        dimPage.style.cssText = 'display:none;';
        form.reset();
        resetSearchResults();
    });

    document.addEventListener('click', (event) => {
        if (event.target === dimPage) {
            formOpenState = false;
            formWindow.style.cssText = 'display: none;';
            dimPage.style.cssText = 'display:none;';
            form.reset();
            resetSearchResults();
        }
    });
};

export { bookFormSubmission, addBookButtonToggle, closeFormWindow };
