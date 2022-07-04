import { myLibrary } from './bookFormSubmission';

const cardContainer = document.querySelector('#card-container');

const displayBookCards = () => {
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

    titleContent.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
    authorContent.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
    pagesContent.textContent = `Pages: ${myLibrary[myLibrary.length - 1].pages.toString()}`;
    readOrNotContent.textContent = myLibrary[myLibrary.length - 1].read ? 'Read' : 'Reading';
};

export default displayBookCards;
