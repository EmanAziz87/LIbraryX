import { myLibrary } from './bookFormSubmission';

const editMode = document.querySelector('.edit-mode');
const cardContainer = document.querySelector('#card-container');
let editModeState = false;

const editModeToggle = () => {
    editMode.addEventListener('click', () => {
        if (myLibrary.length > 0) {
            editModeState = !editModeState;
            if (editModeState) {
                document.querySelector('aside > div > button.edit-mode').style.cssText = 'background-color: red;';
            } else {
                document.querySelector('aside > div > button.edit-mode').style.cssText = 'background-color:';
            }
            const deleteCardButton = cardContainer.querySelectorAll('.delete-card-button');
            deleteCardButton.forEach((element) => {
                element.style.cssText = `display: ${editModeState ? 'inline-block;' : 'none;'}`;
                element.addEventListener('click', () => {
                    element.parentElement.remove();
                    myLibrary.splice(
                        myLibrary.findIndex(function (book) {
                            return `Title: ${book.title}` === element.nextSibling.firstChild.textContent;
                        }),
                        1
                    );
                    if (myLibrary.length === 0) {
                        document.querySelector('aside > div > button.edit-mode').style.cssText = 'background-color:';
                        editModeState = false;
                    }
                });
            });
        } else {
            alert('You need to add books to your library to edit');
        }
    });
};

export default editModeToggle;
