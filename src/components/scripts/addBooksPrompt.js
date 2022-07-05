import { myLibrary } from './bookFormSubmission';
import txt from 'raw-loader!./file.txt';

const mainWindow = document.querySelector('main');
const a = document.createElement('div');
const oneLinerPrompts = txt.split('\n');
console.log(oneLinerPrompts);
let randomIndex = Math.floor(Math.random() * oneLinerPrompts.length);

a.classList.add('add-books-prompt');
mainWindow.appendChild(a);

const addBooksPrompt = () => {
    function screenPrompt() {
        if (myLibrary.length < 1) {
            mainWindow.classList.add('main-hover-state');
            mainWindow.style.cssText = 'transition: background-color 0.5s ease-out 0.05s;';
            a.innerHTML = oneLinerPrompts[randomIndex];
            randomIndex = Math.floor(Math.random() * oneLinerPrompts.length);
            a.style.cssText = 'transition: opacity 0.5s ease-out 0.05s';
            a.classList.add('add-books-prompt-hover');
            mainWindow.removeEventListener('mousenter', screenPrompt);
            mainWindow.addEventListener('mouseleave', removeScreenPrompt);
        } else if (myLibrary.length > 0) {
            mainWindow.classList.remove('main-hover-state');
            a.classList.remove('add-books-prompt-hover');
        }

        function removeScreenPrompt() {
            if (myLibrary.length < 1) {
                mainWindow.classList.remove('main-hover-state');
                mainWindow.style.cssText = 'transition: background-color 0.5s ease-out 0.05s;';
                a.classList.toggle('add-books-prompt-hover');
                mainWindow.addEventListener('mouseenter', screenPrompt);
                mainWindow.removeEventListener('mouseleave', removeScreenPrompt);
            } else if (myLibrary.length > 0) {
                mainWindow.classList.remove('main-hover-state');
                a.classList.remove('add-books-prompt-hover');
            }
        }
    }

    mainWindow.addEventListener('mouseenter', screenPrompt);
};

export default addBooksPrompt;
