import { myLibrary } from './addBookForm';
import { formOpenState } from './addBookForm';
import txt from '../textFiles/file.txt';

const mainWindow = document.querySelector('main');
const promptText = document.createElement('div');
const oneLinerPrompts = txt.split('\n');
let randomIndex = Math.floor(Math.random() * oneLinerPrompts.length);

promptText.classList.add('add-books-prompt');
mainWindow.appendChild(promptText);

const addBooksPrompt = () => {
    function screenPrompt() {
        if (myLibrary.length < 1 && !formOpenState) {
            mainWindow.classList.add('main-hover-state');
            mainWindow.style.cssText = 'transition: background-color 0.5s ease-out 0.05s;';
            promptText.innerHTML = oneLinerPrompts[randomIndex];
            randomIndex = Math.floor(Math.random() * oneLinerPrompts.length);
            promptText.style.cssText = 'transition: opacity 0.5s ease-out 0.05s';
            promptText.classList.add('add-books-prompt-hover');
            mainWindow.removeEventListener('mousenter', screenPrompt);
            mainWindow.addEventListener('mouseleave', removeScreenPrompt);
        } else if (myLibrary.length > 0) {
            mainWindow.classList.remove('main-hover-state');
            promptText.classList.remove('add-books-prompt-hover');
        }
    }

    function removeScreenPrompt() {
        if (myLibrary.length < 1 && !formOpenState) {
            mainWindow.classList.remove('main-hover-state');
            mainWindow.style.cssText = 'transition: background-color 0.5s ease-out 0.05s;';
            promptText.classList.toggle('add-books-prompt-hover');
            mainWindow.addEventListener('mouseenter', screenPrompt);
            mainWindow.removeEventListener('mouseleave', removeScreenPrompt);
        } else if (myLibrary.length > 0) {
            mainWindow.classList.remove('main-hover-state');
            promptText.classList.remove('add-books-prompt-hover');
        }
    }
    mainWindow.addEventListener('mouseenter', screenPrompt);
};

export default addBooksPrompt;
