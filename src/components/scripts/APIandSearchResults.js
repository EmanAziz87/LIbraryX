export const resultsContainer = document.querySelector('.search-results-container');
const apiKey = 'AIzaSyBX94ednIWwsJ6ut9evx4Zyb6uG95cnW8c';

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
        `https://www.googleapis.com/books/v1/volumes?q=${properSearchFormat}&maxResults=38&key=${apiKey}`
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
        console.log(book.pages);
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
}

function resetSearchResults() {
    coversAndBookDetails = [];
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.lastChild);
    }
}

export { retrieveBookInfo, resetSearchResults };
