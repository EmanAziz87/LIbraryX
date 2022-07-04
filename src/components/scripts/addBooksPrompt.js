import { myLibrary } from './bookFormSubmission';
import txt from 'raw-loader!./file.txt';

const mainWindow = document.querySelector('main');
console.log(mainWindow);
const a = document.createElement('div');
const oneLinerPrompts = txt.split('\n');
console.log(oneLinerPrompts);
let randomIndex = Math.floor(Math.random() * oneLinerPrompts.length);

a.classList.add('add-books-prompt', 'add-books-prompt-hover');
mainWindow.appendChild(a);
a.classList.toggle('add-books-prompt-hover');

const addBooksPrompt = () => {
    let hoverState = false;
    if (myLibrary.length < 1) {
        if (!hoverState) {
            mainWindow.addEventListener('mouseover', () => {
                mainWindow.classList.add('main-hover-state');
                mainWindow.style.cssText = 'transition: background-color 0.5s ease-out 0.05s;';
                a.innerHTML = oneLinerPrompts[randomIndex];
                a.style.cssText = 'transition: opacity 0.5s ease-out 0.05s';
                a.classList.toggle('add-books-prompt-hover');
                hoverState = true;
            });
        } else if (hoverState) {
            mainWindow.addEventListener('mouseout', () => {
                mainWindow.classList.remove('main-hover-state');
                mainWindow.style.cssText = 'transition: background-color 0.5s ease-out 0.05s;';
                a.classList.toggle('add-books-prompt-hover');
                randomIndex = Math.floor(Math.random() * oneLinerPrompts.length);
                hoverState = false;
            });
        }
    }
};

export default addBooksPrompt;
