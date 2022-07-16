import { resetFormAndPushToArray } from './addBookForm';
import { formOpenState } from './addBookForm';
const formWindow = document.querySelector('.form-div-container');

export const resultsContainer = document.querySelector('.search-results-container');
const apiKey = 'AIzaSyBX94ednIWwsJ6ut9evx4Zyb6uG95cnW8c';
const previousPageButton = document.querySelector('.previous-page');
const currentPageIndicator = document.querySelector('.current-page');
const bookPreviewCard = document.querySelector('.book-preview-card');
const nextPageButton = document.querySelector('.next-page');
let currentSearchIndex = 0;
let currentDisplayedPage = 1;

function BookVolumeInfo(cover, title, description, pages) {
    this.cover = cover;
    this.title = title;
    this.description = description;
    this.pages = pages;
}

let coversAndBookDetails = [];

async function retrieveBookInfo(userSearch) {
    const properSearchFormat = userSearch.split(' ').join('+');
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${properSearchFormat}&maxResults=40&startIndex=${currentSearchIndex.toString()}&key=${apiKey}`
    );
    const bookInfo = await response.json();
    console.log(bookInfo);
    retrieveBookDetails(bookInfo);
}

function retrieveBookDetails(bookInfo) {
    for (let i = 0; i < bookInfo.items.length; i++) {
        if ('imageLinks' in bookInfo.items[i].volumeInfo) {
            const coverUrl = bookInfo.items[i].volumeInfo.imageLinks.thumbnail;
            const title = bookInfo.items[i].volumeInfo.title;
            const description = bookInfo.items[i].volumeInfo.description;
            const pages = bookInfo.items[i].volumeInfo.pageCount;

            const aBook = new BookVolumeInfo(coverUrl, title, description, pages);
            coversAndBookDetails.push(aBook);
        } else {
            continue;
        }
    }

    coversAndBookDetails.forEach((book) => {
        displayAllResults(book.cover, book.title, book.description, book.pages);
    });
}

function displayAllResults(cover, title, description, pages) {
    const searchItemsContainer = document.createElement('div');
    const coverImage = document.createElement('img');
    const titleContainer = document.createElement('div');
    const descriptionContainer = document.createElement('div');
    const pagesContainer = document.createElement('div');

    titleContainer.textContent = title;
    descriptionContainer.textContent = description;
    pagesContainer.textContent = `Pages: ${pages}`;

    searchItemsContainer.classList.add('search-book-info-container');
    coverImage.classList.add('search-result-item', 'search-result-cover');
    titleContainer.classList.add('search-result-item', 'search-result-title');
    descriptionContainer.classList.add('search-result-item', 'search-result-description');
    pagesContainer.classList.add('search-result-item', 'search-result-pageCount');

    searchItemsContainer.appendChild(coverImage);
    searchItemsContainer.appendChild(titleContainer);
    searchItemsContainer.appendChild(descriptionContainer);
    searchItemsContainer.appendChild(pagesContainer);

    coverImage.src = cover;
    coverImage.style.cssText = 'width: 100px; height: 150px;';
    resultsContainer.append(searchItemsContainer);

    displayPreviewCard(searchItemsContainer, coverImage);
}

function displayPreviewCard(searchContainer, coverNode) {
    coverNode.addEventListener('dragstart', (event) => {
        if (event.path[0]) {
        }
    });
}

function searchResultsNav() {
    nextPageButton.addEventListener('click', () => {
        currentDisplayedPage += 1;
        currentPageIndicator.textContent = currentDisplayedPage;
        currentSearchIndex += 40;
        resetFormAndPushToArray();
    });

    previousPageButton.addEventListener('click', () => {
        if (currentSearchIndex >= 40) {
            currentSearchIndex -= 40;
            currentDisplayedPage -= 1;
            currentPageIndicator.textContent = currentDisplayedPage;
            resetFormAndPushToArray();
        }
    });
}

function resetSearchResults() {
    coversAndBookDetails = [];
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.lastChild);
    }
    resetCurrentSearchIndex();
}

function resetCurrentSearchIndex() {
    if (!formOpenState) {
        currentSearchIndex = 0;
        currentDisplayedPage = 1;
        currentPageIndicator.textContent = currentDisplayedPage;
    }
}

export { retrieveBookInfo, resetSearchResults, searchResultsNav };
